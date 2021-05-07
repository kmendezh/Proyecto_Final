"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from flask_mail import Mail, Message
from api.models import db, User, Post
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash
import datetime

#import JWT for tokenization
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity

api = Blueprint('api', __name__)

######################### Protected endpoints #########################

# Add a new POST
@api.route('/addNewPost', methods=['POST'])
@jwt_required()
def addNewPost():

    # Obtener el ID del usuario registrado get_jwt_identity
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)

    # Se reporta un error si no esta registrado
    if user is None:
        raise APIException('No se ha iniciado sesión', status_code=400)

    #Obtener el request body
    request_body = request.get_json()
    # Validate the data
    if (request_body["title"] is None or request_body["comment"] is None or request_body["url"] is None or request_body["provincia"] is None \
        or request_body["dificultad"] is None or request_body["duracion"] is None):
        raise APIException('Request Body inválido. Uno o más parámetros están vacíos', status_code=400)

    #Create the new entry
    createdDate = datetime.datetime.now()
    createdDate = createdDate.strftime("%d/%m/%Y %H:%M:%S")
    updatedDate = datetime.datetime.now()
    updatedDate = updatedDate.strftime("%d/%m/%Y %H:%M:%S")
    total_comment = 35
    total_like = 35
    newPost = Post(created = createdDate, updated = updatedDate, title = request_body["title"], comment = request_body["comment"],\
        url = request_body["url"], provincia = request_body["provincia"], dificultad = request_body["dificultad"], duracion = request_body["duracion"],\
        total_comment = total_comment, total_like = total_like, iduser = user.id)

    db.session.add(newPost)
    db.session.commit()     

    return jsonify('Nuevo Post publicado'), 200


####################################################################
# Ruta de prueba para ver los usuarios registrados
@api.route('/getUser', methods=['GET'])
def getUser():

    user_query = User.query.all()

    users = list(map(lambda x: x.serialize(), user_query))

    return jsonify(users), 200

# Ruta de prueba para ver los POST
@api.route('/getPost', methods=['GET'])
def getPost():

    post_query = Post.query.all()

    posts = list(map(lambda x: x.serialize(), post_query))

    return jsonify(posts), 200

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

@api.route('/register', methods=['POST'])
def register():
    
    email = request.json.get("email", None)
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    security_question = request.json.get("security_question", None)
    security_answer = request.json.get("security_answer", None)
    is_active = request.json.get("is_active", None)

    # validar que contengan informacion 
    if email is None or username is None or password is None or security_question is None or security_answer is None:
        raise APIException('Correo, nombre de usuario, contraseña, pregunta secreta o respuesta secreta no encontrados', status_code=406)
    # valida que el email, username y password no estn en vacios
    if email == "" or username == "" or password == "" or security_question == "" or security_answer == "":
        raise APIException('Correo, nombre de usuario, contraseña, pregunta secreta o respuesta secreta estan vacios', status_code=407)
    # valida si el email ya existe
    emailrepetido = User.query.filter_by(email=email).first()
    # emailrepetido = list(map(lambda x: x.serialize(), emailrepetido))
    if emailrepetido is not None:
        raise APIException('El correo ya existe', status_code=409)
    # valida si el usuario ya existe
    userrepetido = User.query.filter_by(username=username).first()
    # userrepetido = list(map(lambda x: x.serialize(), userrepetido))
    if userrepetido is not None:
        raise APIException('El usuario ya se encuentra registrado', status_code=410)
    
    # registro del nuevo usuario
    # se usa la funcion generate_password_hash para encriptar el password y la respuesta a la pregunta de seguridad que el usuario registro
    newUser = User(username=username, email=email,
    password=generate_password_hash(password, "sha256"), is_active=is_active, security_question = security_question, security_answer = generate_password_hash(security_answer, "sha256")) 
    db.session.add(newUser)
    db.session.commit()

    return jsonify('Se registro el usuario correctamente'), 200

#actualiza el password si el usuario olvida su constraseña
@api.route('/updatepassword/<int:id>', methods=['POST'])
def updatepassword(id):

    body = request.get_json()

    user1 = User.query.get(id)
    if user1 is None:
        raise APIException('Usuario no existe', status_code=404)

    if "password" in body :
        #se encripta el password
        user1.password = generate_password_hash(body["password"], "sha256")
    db.session.commit()

    return jsonify('El password se actualizo correctamente'), 200

# esta ruta obtiene la pregunta de seguridad que registro el usuario
@api.route('/postsecurityquestion', methods=['POST'])
def get_security_question():

    email = request.json.get("email", None)
   
    if email is None:
        return jsonify({"msg": "No email was provided"}), 400

    user = User.query.filter_by(email=email).first()
    if user is None:
        return jsonify({"msg": "Invalid email"}), 401
    else:
        print(user)
        return jsonify({ "user_id": user.id, "security_question": user.security_question}), 200

# esta ruta valida si la respuesta de seguridad que registro el usuario es True o False
@api.route('/postsecurityanswer', methods=['POST'])
def get_security_answer():

    iduser = request.json.get("id", None)
    security_answer = request.json.get("security_answer", None)
   
    if security_answer is None:
        return jsonify({"msg": "No security_answer was provided"}), 400
    if iduser is None:
        return jsonify({"msg": "No id user was provided"}), 400

    user = User.query.filter_by(id=iduser).first()
    result = check_password_hash(user.security_answer, security_answer)
    if user is None or result == False:
        # the user was not found on the database
        return jsonify({"msg": "Invalid security answer or id user"}), 401
    else:
        print(user)
        return jsonify({ "user_id": user.id, "estado": result}), 200

@api.route('/login', methods=['POST'])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    
    if email is None:
        return jsonify({"msg": "No email was provided"}), 400
    if password is None:
        return jsonify({"msg": "No password was provided"}), 400

    # Se obtienen los credenciales del usuario solicitado
    user = User.query.filter_by(email=email).first()
    # Si el password encriptado no coincide con el password ingresado, no se acepta
    result = check_password_hash(user.password,password)
    
    if result is False:
        # the user was not found on the database
        return jsonify({"msg": "Invalid username or password"}), 401
    else:
        print(user)
        # create a new token with the user id inside
        access_token = create_access_token(identity=user.id)
        return jsonify({ "token": access_token, "user_id": user.id }), 200

@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    
    print(current_user_id, user)
    return jsonify({"id": user.id, "email": user.email }), 200