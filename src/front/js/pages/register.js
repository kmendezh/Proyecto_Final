import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams, Redirect } from "react-router-dom";
import "../../styles/login.css";
import validator from "validator";

//comando
// npm install validator

const urlAPI = "https://3001-silver-spider-kikqr32d.ws-us04.gitpod.io/api/register";

export const RegisterPage = () => {
	// Get Store
	const { store, actions } = useContext(Context);

	const handleSubmit = async e => {
		e.preventDefault();

		if (!validator.isEmail(email)) {
			setErrorWindow(true);
			setErrorMsg("Formato de correo invalido");
		} else if (userName == "") {
			setErrorWindow(true);
			setErrorMsg("Por favor ingrese el nombre de usuario");
		} else if (password == "") {
			setErrorWindow(true);
			setErrorMsg("Por favor ingrese la contraseña");
		} else if (securityquestion == "") {
			setErrorWindow(true);
			setErrorMsg("Por favor ingrese la Pregunta de seguridad");
		} else if (securityanswer == "") {
			setErrorWindow(true);
			setErrorMsg("Por favor ingrese la Respuesta de seguridad");
		} else {
			let myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/json");

			let raw = JSON.stringify({
				email: email,
				password: password,
				username: userName,
				is_active: true,
				security_question: securityquestion,
				security_answer: securityanswer
			});

			let requestOptions = {
				method: "POST",
				headers: myHeaders,
				body: raw,
				redirect: "follow"
			};

			let response = await fetch(urlAPI, requestOptions);
			if (response.status != 200) {
				console.log("No Registrado", response);
				setErrorWindow(true);
				if (response.status == 409) {
					setErrorMsg("El correo ya se encuentra registrado");
				} else if (response.status == 410) {
					setErrorMsg("El nombre de usuario ya se encuentra registrado");
				}
			} else {
				console.log("Registrado");
				setAuth(true);
			}
		}
	};

	const closeWindow = () => {
		setErrorMsg("");
		setErrorWindow(false);
	};

	// Variables to handle email, password
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [securityquestion, setSecurityquestion] = useState("");
	const [securityanswer, setSecurityanswer] = useState("");
	const [authentication, setAuth] = useState(false);
	const [userName, setUserName] = useState("");
	const [errorWindow, setErrorWindow] = useState(false);
	const [errorMsg, setErrorMsg] = useState("");

	return (
		<div className="loginWindow">
			<form onSubmit={handleSubmit}>
				{errorWindow ? (
					<div
						className="alert alert-danger alert-dismissible fade show mt-1"
						role="alert"
						style={{ width: "50%", margin: "auto" }}>
						{errorMsg}
						<button
							type="button"
							className="close"
							data-dismiss="alert"
							aria-label="Close"
							onClick={closeWindow}>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
				) : null}
				<div className="containerRegister">
					<h1 className="header"> Regístrate </h1>

					<div className="input-group input-group-lg userInput">
						<div className="input-group-prepend">
							<span className="input-group-text" id="inputGroup-sizing-lg">
								<i style={{ color: "black", fontSize: "18px" }} className="fas fa-address-book" />
							</span>
						</div>
						<input
							onChange={e => setEmail(e.target.value)}
							type="text"
							className="form-control"
							aria-label="Large"
							aria-describedby="inputGroup-sizing-sm"
							placeholder="Correo"
						/>
					</div>

					<div className="input-group input-group-lg userInput">
						<div className="input-group-prepend">
							<span className="input-group-text" id="inputGroup-sizing-lg">
								<i style={{ color: "black", fontSize: "18px" }} className="fas fa-paw" />
							</span>
						</div>
						<input
							onChange={e => setUserName(e.target.value)}
							type="text"
							className="form-control"
							aria-label="Large"
							aria-describedby="inputGroup-sizing-sm"
							placeholder="Nombre de usuario"
						/>
					</div>

					<div className="input-group input-group-lg userInput">
						<div className="input-group-prepend">
							<span className="input-group-text" id="inputGroup-sizing-lg">
								<i style={{ color: "black", fontSize: "18px" }} className="fas fa-paw" />
							</span>
						</div>
						<input
							onChange={e => setPassword(e.target.value)}
							type="password"
							className="form-control"
							aria-label="Large"
							aria-describedby="inputGroup-sizing-sm"
							placeholder="Contraseña"
						/>
					</div>
					<div className="input-group input-group-lg userInput">
						<div className="input-group-prepend">
							<span className="input-group-text" id="inputGroup-sizing-lg">
								<i style={{ color: "black", fontSize: "18px" }} className="fas fa-paw" />
							</span>
						</div>
						<input
							onChange={e => setSecurityquestion(e.target.value)}
							type="text"
							className="form-control"
							aria-label="Large"
							aria-describedby="inputGroup-sizing-sm"
							placeholder="Pregunta de seguridad"
						/>
					</div>
					<div className="input-group input-group-lg userInput">
						<div className="input-group-prepend">
							<span className="input-group-text" id="inputGroup-sizing-lg">
								<i style={{ color: "black", fontSize: "18px" }} className="fas fa-paw" />
							</span>
						</div>
						<input
							onChange={e => setSecurityanswer(e.target.value)}
							type="text"
							className="form-control"
							aria-label="Large"
							aria-describedby="inputGroup-sizing-sm"
							placeholder="Respuesta de seguridad"
						/>
					</div>
					<div style={{ marginBottom: "20px" }}>
						<button type="submit" className="btn btn-light">
							Registrarse
						</button>
					</div>

					<div className="footer_login">
						¿Ya tienes cuenta?
						<Link to={"/login"} style={{ color: "white", paddingLeft: "2px" }}>
							{""}
							Inicia sesión
						</Link>
					</div>
				</div>

				{authentication ? <Redirect to="/login" /> : null}
			</form>
		</div>
	);
};
