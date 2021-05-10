import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams, Redirect } from "react-router-dom";
import "../../styles/login.css";

const urlAPI = "https://3001-cyan-butterfly-oxdmgid0.ws-us03.gitpod.io/api/updatepassword/";

export const ResetPassword = () => {
	// Get Store
	const { store, actions } = useContext(Context);
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");
	const [authentication, setAuth] = useState(false);
	const [errorMsg, setErrorMsg] = useState("");
	const [errorWindow, setErrorWindow] = useState(false);

	// console.log("Reset Password for User Id ", store.forgotPswdId);

	const handleSubmit = async e => {
		e.preventDefault();

		if (password === "") {
			setErrorWindow(true);
			setErrorMsg("Por favor ingrese su contraseña");
		} else if (passwordConfirm === "") {
			setErrorWindow(true);
			setErrorMsg("Por favor ingrese su confirmacion de la contraseña");
		} else if (password != passwordConfirm) {
			setErrorWindow(true);
			setErrorMsg("Las contraseñas no coinciden");
		} else {
			let myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/json");

			let raw = JSON.stringify({
				password: password
			});

			let requestOptions = {
				method: "POST",
				headers: myHeaders,
				body: raw,
				redirect: "follow"
			};

			let url = urlAPI + store.forgotPswdId.user_id;

			console.log(url);

			let response = await fetch(url, requestOptions);
			if (response.status != 200) {
				setErrorWindow(true);
				setErrorMsg("Error al actualizar la contraseña");
			} else {
				console.log("Contraseña actualizada");
				setAuth(true);
			}
		}
	};

	const closeWindow = () => {
		setErrorWindow(false);
		setErrorMsg("");
	};

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
				<div className="containerResetPassword">
					<h1 className="header">Cambiar Contraseña</h1>
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
							placeholder="Nueva Contraseña"
						/>
					</div>
					<div className="input-group input-group-lg userInput">
						<div className="input-group-prepend">
							<span className="input-group-text" id="inputGroup-sizing-lg">
								<i style={{ color: "black", fontSize: "18px" }} className="fas fa-paw" />
							</span>
						</div>
						<input
							onChange={e => setPasswordConfirm(e.target.value)}
							type="password"
							className="form-control"
							aria-label="Large"
							aria-describedby="inputGroup-sizing-sm"
							placeholder="Confirmar Contraseña"
						/>
					</div>
					<div style={{ marginBottom: "20px" }}>
						<button type="submit" className="btn btn-light">
							Guardar Contraseña
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
