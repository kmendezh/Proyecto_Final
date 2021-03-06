import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams, Redirect } from "react-router-dom";
import "../../styles/login.css";
import validator from "validator";

const urlAPILogin = "https://3001-blush-skunk-pid50gla.ws-us04.gitpod.io/api/login";
export const LoginPage = () => {
	// Get Store
	const { store, actions } = useContext(Context);

	useEffect(() => {
		if (sessionStorage.getItem("token") != null) {
			setAuth(true);
		}
	}, []);

	const handleSubmit = async e => {
		e.preventDefault();

		if (!validator.isEmail(email)) {
			setErrorWindow(true);
			setErrorMsg("Formato de correo invalido");
		} else if (password === "") {
			setErrorWindow(true);
			setErrorMsg("Por favor ingrese su contraseña");
		} else {
			let myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/json");

			let raw = JSON.stringify({
				email: email,
				password: password
			});

			let requestOptions = {
				method: "POST",
				headers: myHeaders,
				body: raw,
				redirect: "follow"
			};

			await fetch(urlAPILogin, requestOptions)
				.then(response => response.text())
				.then(result => {
					result = JSON.parse(result);
					if (result.token != undefined) {
						sessionStorage.setItem("token", result.token);
						console.log("Token guardado");
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
	const [password, setPassword] = useState("");
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
				<div className="container" style={{ marginBottom: "100px" }}>
					<h1 className="header"> Login</h1>

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
							onChange={e => setPassword(e.target.value)}
							type="password"
							className="form-control"
							aria-label="Large"
							aria-describedby="inputGroup-sizing-sm"
							placeholder="Contraseña"
						/>
					</div>
					<div style={{ marginBottom: "20px" }}>
						<button type="submit" className="btn btn-light">
							Login
						</button>
					</div>

					<div className="footer_login">
						¿No tienes cuenta?
						<Link to={"/register"} style={{ color: "white", paddingLeft: "2px" }}>
							{""}
							Regístrate
						</Link>
						<br />
						¿Olvido su contraseña?
						<Link to={"/forgotpassword"} style={{ color: "white", paddingLeft: "2px" }}>
							{""}
							Recuperar contraseña
						</Link>
					</div>
				</div>

				{authentication ? <Redirect to="/perfil" /> : null}
			</form>
		</div>
	);
};
