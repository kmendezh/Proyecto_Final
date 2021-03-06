import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.css";
import { Link, useParams, Redirect } from "react-router-dom";

const urlAPILogin = "https://3001-silver-spider-kikqr32d.ws-us04.gitpod.io/api/postsecurityquestion";

export const ForgotPassword = () => {
	// Get Store
	const { store, actions } = useContext(Context);

	const handleSubmit = async e => {
		e.preventDefault();

		if (email == "") {
			setErrorWindow(true);
			setErrorMsg("Por favor ingrese el email");
		} else {
			let myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/json");

			let raw = JSON.stringify({
				email: email
			});

			let requestOptions = {
				method: "POST",
				headers: myHeaders,
				body: raw,
				redirect: "follow"
			};

			await fetch(urlAPILogin, requestOptions)
				.then(response => response.json())
				.then(result => {
					// console.log(result);
					if (result.user_id != undefined) {
						console.log("Obtuvo datos");
						actions.setForgotPswdId(result);
						setAuth(true);
					} else {
						setErrorWindow(true);
						setErrorMsg("Correo y/o contraseña inválidos");
					}
				})
				.catch(error => console.log("error", error));
		}
	};

	const closeWindow = () => {
		setErrorWindow(false);
		setErrorMsg("");
	};

	// Variables to handle email, password
	const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");
	const [authentication, setAuth] = useState(false);
	const [errorMsg, setErrorMsg] = useState("");
	const [errorWindow, setErrorWindow] = useState(false);

	return (
		<div className="loginWindow">
			<form onSubmit={handleSubmit}>
				{errorWindow ? (
					<div
						className="alert alert-danger alert-dismissible fade show"
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
				<div className="containerForgot">
					<h1 className="header"> Recuperar Contraseña</h1>

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
					<div style={{ marginBottom: "20px" }}>
						<button type="submit" className="btn btn-light">
							Enviar
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

				{authentication ? <Redirect to="/securityquestion" /> : null}
			</form>
		</div>
	);
};
