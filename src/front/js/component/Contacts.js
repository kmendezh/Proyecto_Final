import React, { Component } from "react";
import emailjs from "emailjs-com";
// npm install emailjs-com --save para que funcione
import { Container, Jumbotron, Form } from "react-bootstrap";
import "../../styles/contacts.css";

export function Contacts() {
	function SendEmail(e) {
		e.preventDefault();

		emailjs.sendForm("gmail", "template_tdet1ee", e.target, "user_sx2Tr1Y8QHhcamf0MzNqO").then(
			result => {
				console.log(result.text);
			},
			error => {
				console.log(error.text);
			}
		);
		e.target.reset();
	}
	return (
		<div className="forma">
			<div className="contenedor">
				<h2>Costa Rica</h2>
			</div>
			<div>
				<h1 className="cont">Contactenos y con gusto le responderemos</h1>
			</div>
			<div>
				<h2>Para contactarnos,complete el siguiente formulario</h2>
				<p>Nosotros te contactaremos de vuelta en menos de 48 horas</p>
			</div>
			<br></br>
			<br></br>
			<div className="container containerform">
				<form onSubmit={SendEmail}>
					<div className="row pt-5 mx-auto">
						<div className="col-8 form-group mx-auto">
							<input type="text" className="form-control" placeholder="nombre" name="name" />
						</div>
						<div className="col-8 form-group  pt-2 mx-auto">
							<input type="email" className="form-control" placeholder="Email" name="email" />
						</div>
						<div className="col-8 form-group  pt-2 mx-auto">
							<textarea
								className="form-control"
								id=""
								cols="30"
								rows="8"
								placeholder="your message"
								name="message">
								{" "}
							</textarea>
							<input type="submit" value="enviar" />
						</div>
					</div>
				</form>
			</div>
			\<div className="container-fluid"></div>
			<h1>Encuentranos en nuestras redes sociales</h1>
			<div className="row">
				<div className="col md-3">
                  
			<a href="https://www.facebook.com/PuraVidaPassport/" target="_blank" rel="noopener noreferrer">
				<i className="fab fa-facebook-f" />
			</a>
                </div>
				<div className="col md-3">icono</div>
				<div className="col md-3">icono</div>
				<div className="col md-3">icono</div>
			</div>
		</div>
	);
}
