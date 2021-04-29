"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from flask_mail import Mail, Message
from api.models import db, User
from api.utils import generate_sitemap, APIException

#import JWT for tokenization
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity

api = Blueprint('api', __name__)

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
    is_active = request.json.get("is_active", None)

    # validar que contengan informacion 
    if email is None or username is None or password is None:
        raise APIException('Correo, nombre de usuario o contraseña no encontrados', status_code=406)
    # valida que el email, username y password no estn en vacios
    if email == "" or username == "" or password == "":
        raise APIException('Correo, nombre de usuario o contraseña estan vacios', status_code=407)
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
    newUser = User(username=username, email=email,
    password=password, is_active=is_active)
    db.session.add(newUser)
    db.session.commit()

    return jsonify('Se registro el usuario correctamente'), 200

@api.route('/updatepassword/<int:id>', methods=['POST'])
def updatepassword(id):

    body = request.get_json()

    user1 = User.query.get(id)
    if user1 is None:
        raise APIException('Usuario no existe', status_code=404)

    if "password" in body:
        user1.password = body["password"]
    db.session.commit()

    return jsonify('El password se actualizo correctamente'), 200

@api.route('/login', methods=['POST'])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    
    if email is None:
        return jsonify({"msg": "No email was provided"}), 400
    if password is None:
        return jsonify({"msg": "No password was provided"}), 400

    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
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