import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams, Redirect } from "react-router-dom";
import "../../styles/login.css";

const urlAPI = "https://3001-crimson-dragon-kj8uyl82.ws-us03.gitpod.io/api/postsecurityanswer";

export const SecurityQuestion = () => {
	// Get Store
	const { store, actions } = useContext(Context);

	// console.log("Reset Password for User Id ", store.forgotPswdId);

	const handleSubmit = async e => {
		e.preventDefault();

		if (securityanswer == "") {
			setErrorWindow(true);
			setErrorMsg("Por favor ingrese la Respuesta de Seguridad");
		} else {
			let myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/json");

			let raw = JSON.stringify({
				id: store.forgotPswdId.user_id,
				security_answer: securityanswer
			});

			let requestOptions = {
				method: "POST",
				headers: myHeaders,
				body: raw,
				redirect: "follow"
			};
			// console.log("Entramos a Handle Submit");
			await fetch(urlAPI, requestOptions)
				.then(response => response.json())
				.then(result => {
					if (result.user_id != undefined) {
						console.log("se invoca a la vista resetpassword");
						setAuth(true);
					} else {
						setErrorWindow(true);
						setErrorMsg("Respuesta de seguridad inválida");
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
	const [securityanswer, setSecurityAnswer] = useState("");
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
				<div className="containerSecurity">
					<h1 className="header">Pregunta de Seguridad</h1>
					<div className="input-group input-group-lg userInput">
						<div className="input-group-prepend">
							<span className="input-group-text" id="inputGroup-sizing-lg">
								<i style={{ color: "black", fontSize: "18px" }} className="fas fa-paw" />
							</span>
						</div>
						<input
							defaultValue={store.forgotPswdId.security_question}
							type="text"
							className="form-control"
							aria-label="Large"
							aria-describedby="inputGroup-sizing-sm"
							disabled="disabled"
						/>
					</div>

					<div className="input-group input-group-lg userInput">
						<div className="input-group-prepend">
							<span className="input-group-text" id="inputGroup-sizing-lg">
								<i style={{ color: "black", fontSize: "18px" }} className="fas fa-paw" />
							</span>
						</div>
						<input
							onChange={e => setSecurityAnswer(e.target.value)}
							type="text"
							className="form-control"
							aria-label="Large"
							aria-describedby="inputGroup-sizing-sm"
							placeholder="Respuesta de seguridad"
						/>
					</div>

					<div style={{ marginBottom: "20px" }}>
						<button type="submit" className="btn btn-light">
							Aceptar
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

				{authentication ? <Redirect to="/resetpassword" /> : null}
			</form>
		</div>
	);
};
