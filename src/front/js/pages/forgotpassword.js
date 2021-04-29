import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.css";
import { Link, useParams, Redirect } from "react-router-dom";

const urlAPILogin = "https://3001-azure-cougar-47rfuuyp.ws-us03.gitpod.io/api/login";

export const ForgotPassword = () => {
	// Get Store
	const { store, actions } = useContext(Context);

	const handleSubmit = async e => {
		e.preventDefault();

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

		// 	await fetch(urlAPILogin, requestOptions)
		// 		.then(response => response.text())
		// 		.then(result => {
		// 			result = JSON.parse(result);
		// 			if (result.token != undefined) {
		// 				sessionStorage.setItem("token", result.token);
		// 				console.log("Token guardado");
		// 				setAuth(true);
		// 			} else {
		// 				setErrorWindow(true);
		// 				setErrorMsg("Correo y/o contraseña inválidos");
		// 			}
		// 		})
		// 		.catch(error => console.log("error", error));
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
					<h1 className="header"> Forgot Password</h1>

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
							Submit
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

				{authentication ? <Redirect to="/perfil" /> : null}
			</form>
		</div>
	);
};
