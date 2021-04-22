"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

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

    # validar que contengan informacion 
    if email is None or username is None or password is None:
        raise APIException('Correo, nombre de usuario o contraseña no encontrados', status_code=400)
    # valida que el email, username y password no estn en vacios
    if email == "" or username == "" or password == "":
        raise APIException('Correo, nombre de usuario o contraseña estan vacios', status_code=400)
    # valida si el email ya existe
    emailrepetido = User.query.filter_by(email=email).first()
    emailrepetido = list(map(lambda x: x.serialize(), emailrepetido))
    if emailrepetido != []:
        raise APIException('El correo ya existe', status_code=400)
    # valida si el usuario ya existe
    userrepetido = User.query.filter_by(username=username).first()
    userrepetido = list(map(lambda x: x.serialize(), userrepetido))
    if userrepetido != []:
        raise APIException('El usuario ya se encuentra registrado', status_code=400)
    
    # registro del nuevo usuario
    newUser = User(username=username, email=email,
    password=password)
    db.session.add(newUser)
    db.session.commit()

    return jsonify('OK'), 200