from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model): 
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    username = db.Column(db.String(200), unique=True, nullable=False)
    password = db.Column(db.String(500), unique=False, nullable=False)
    security_question = db.Column(db.String(200), unique=False, nullable=False)
    security_answer = db.Column(db.String(500), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "username": self.username,
            "idrespuesta": self.idrespuesta,
            "respuesta": self.respuesta,
            # do not serialize the password, its a security breach
        }
class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    created = db.Column(db.DateTime, nullable=False)
    updated = db.Column(db.DateTime, nullable=False)
    title = db.Column(db.String(300), nullable=False)
    comment = db.Column(db.String(300), nullable=False)
    url = db.Column(db.String(300), nullable=False)
    provincia = db.Column(db.String(30), nullable=False)
    dificultad = db.Column(db.String(30), nullable=False)
    duracion = db.Column(db.Integer, nullable=False)
    total_comment = db.Column(db.Integer, nullable=False)
    total_like = db.Column(db.Integer, nullable=False)
    iduser = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship(User, foreign_keys=[iduser])

    def __repr__(self):
        return '<Post %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "created": self.created,
            "updated": self.updated,
            "title": self.title,
            "comment": self.comment,
            "url": self.url,
            "provincia": self.provincia,
            "dificultad": self.dificultad,
            "duracion": self.duracion,
            "total_comment": self.total_comment,
            "total_like": self.total_like,
            "iduser": self.iduser
        }
        
class Post_like(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    created = db.Column(db.DateTime, nullable=False)
    updated = db.Column(db.DateTime, nullable=False)
    idpost = db.Column(db.Integer, db.ForeignKey('post.id'))
    post = db.relationship(Post, foreign_keys=[idpost])
    iduser = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship(User, foreign_keys=[iduser])

    def __repr__(self):
        return '<Post_like %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "created": self.created,
            "updated": self.updated,
            "idpost": self.idpost,
            "iduser": self.iduser
        }
class Post_comments(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    created = db.Column(db.DateTime, nullable=False)
    updated = db.Column(db.DateTime, nullable=False)
    comment = db.Column(db.String(300), nullable=False)
    idpost = db.Column(db.Integer, db.ForeignKey('post.id'))
    post = db.relationship(Post, foreign_keys=[idpost])
    iduser = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship(User, foreign_keys=[iduser])

    def __repr__(self):
        return '<Post_like %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "created": self.created,
            "updated": self.updated,
            "comment": self.comment,
            "idpost": self.idpost,
            "iduser": self.iduser
        }