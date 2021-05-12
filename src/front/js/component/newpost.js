import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams, Redirect } from "react-router-dom";
import "../../styles/login.css";
import validator from "validator";

//comando
// npm install validator

const urlAPI = "https://3001-blush-skunk-pid50gla.ws-us04.gitpod.io/api/addNewPost";

export const NewPost = () => {
	// Get Store
	const { store, actions } = useContext(Context);

	const handleSubmit = async e => {
		e.preventDefault();

		if (title == "") {
			setErrorWindow(true);
			setErrorMsg("Por favor ingrese el titulo");
		} else if (url == "") {
			setErrorWindow(true);
			setErrorMsg("Por favor ingrese la url");
		} else if (provincia == "") {
			setErrorWindow(true);
			setErrorMsg("Por favor ingrese la provincia");
		} else if (dificultad == "") {
			setErrorWindow(true);
			setErrorMsg("Por favor ingrese la dificultad");
		} else if (duracion == "") {
			setErrorWindow(true);
			setErrorMsg("Por favor ingrese la duracion");
		} else {
			// Se envia el nuevo Post
			let myHeaders = new Headers();
			let token = "Bearer " + sessionStorage.getItem("token");
			myHeaders.append("Authorization", token);
			myHeaders.append("Content-Type", "application/json");

			let raw = JSON.stringify({
				title: title,
				comment: comment,
				url: url,
				provincia: provincia,
				dificultad: dificultad,
				duracion: duracion
			});

			let requestOptions = {
				method: "POST",
				headers: myHeaders,
				body: raw,
				redirect: "follow"
			};

			let response = await fetch(urlAPI, requestOptions);
			if (response.status != 200) {
				console.log("Post no creado", response);
				setErrorWindow(true);
				if (response.status == 400) {
					setErrorMsg("Request Body inválido. Uno o más parámetros están vacíos");
				}
			} else {
				console.log("creado");
				setAuth(true);
			}
		}
	};

	const closeWindow = () => {
		setErrorMsg("");
		setErrorWindow(false);
	};

	// Variables to handle email, password
	const [title, setTitle] = useState("");
	const [url, setUrl] = useState("");
	const [provincia, setProvincia] = useState("");
	const [dificultad, setDificultad] = useState("");
	const [authentication, setAuth] = useState(false);
	const [duracion, setDuracion] = useState("");
	const [comment, setComment] = useState("");
	const [errorWindow, setErrorWindow] = useState(false);
	const [errorMsg, setErrorMsg] = useState("");

	return (
		<div className="newpostwindow">
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
					<h3 className="header"> Crear nuevo post </h3>

					<div className="input-group input-group-lg userInput">
						<div className="input-group-prepend">
							<span className="input-group-text" id="inputGroup-sizing-lg">
								<i style={{ color: "black", fontSize: "18px" }} className="fas fa-address-book" />
							</span>
						</div>
						<input
							onChange={e => setTitle(e.target.value)}
							type="text"
							className="form-control"
							aria-label="Large"
							aria-describedby="inputGroup-sizing-sm"
							placeholder="Titulo"
						/>
					</div>

					<div className="input-group input-group-lg userInput">
						<div className="input-group-prepend">
							<span className="input-group-text" id="inputGroup-sizing-lg">
								<i style={{ color: "black", fontSize: "18px" }} className="fas fa-paw" />
							</span>
						</div>
						<input
							onChange={e => setUrl(e.target.value)}
							type="text"
							className="form-control"
							aria-label="Large"
							aria-describedby="inputGroup-sizing-sm"
							placeholder="url"
						/>
					</div>

					<div className="input-group input-group-lg userInput">
						<div className="input-group-prepend">
							<span className="input-group-text" id="inputGroup-sizing-lg">
								<i style={{ color: "black", fontSize: "18px" }} className="fas fa-paw" />
							</span>
						</div>{" "}
						<select id="Provincia" name="Provincia" onChange={e => setProvincia(e.target.value)}>
							<option value="Alajuela">Alajuela</option>
							<option value="San Jose">San Jose</option>
							<option value="Cartago" selected>
								Cartago
							</option>
							<option value="Heredia">Heredia</option>
							<option value="Puntarenas">Puntarenas</option>
							<option value="Guanacaste">Guanacaste</option>
							<option value="Limon">Limon</option>
						</select>
					</div>
					<div className="input-group input-group-lg userInput">
						<div className="input-group-prepend">
							<span className="input-group-text" id="inputGroup-sizing-lg">
								<i style={{ color: "black", fontSize: "18px" }} className="fas fa-paw" />
							</span>
						</div>
						<select id="Dificultad" name="Dificultad" onChange={e => setDificultad(e.target.value)}>
							<option value="Baja">Dificultad-Baja</option>
							<option value="Media"> Dificultad-Media</option>
							<option value="Alta" selected>
								Dificultad-Alta
							</option>
						</select>
					</div>

					<div className="input-group input-group-lg userInput">
						<div className="input-group-prepend">
							<span className="input-group-text" id="inputGroup-sizing-lg">
								<i style={{ color: "black", fontSize: "18px" }} className="fas fa-paw" />
							</span>
						</div>
						<input
							onChange={e => setDuracion(e.target.value)}
							type="text"
							className="form-control"
							aria-label="Large"
							aria-describedby="inputGroup-sizing-sm"
							placeholder="duracion"
						/>
					</div>

					<div className="input-group input-group-lg userInput">
						<div className="input-group-prepend">
							<span className="input-group-text" id="inputGroup-sizing-lg">
								<i style={{ color: "black", fontSize: "18px" }} className="fas fa-paw" />
							</span>
						</div>
						<input
							onChange={e => setComment(e.target.value)}
							type="text"
							className="form-control"
							aria-label="Large"
							aria-describedby="inputGroup-sizing-sm"
							placeholder="comment"
						/>
					</div>
					<div style={{ marginBottom: "20px" }}>
						<button type="submit" className="btn btn-light">
							Crear nuevo post
						</button>
					</div>
				</div>

				{authentication ? <Redirect to="/perfil" /> : null}
			</form>
		</div>
	);
};
