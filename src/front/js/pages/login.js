import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams, Redirect } from "react-router-dom";
import "../../styles/login.css";

export const LoginPage = () => {
	// Get Store
	const { store, actions } = useContext(Context);

	const handleSubmit = e => {
		e.preventDefault();
	};

	const closeWindow = () => {
		setValidationError(false);
		setErrorMsg("");
	};

	// Variables to handle email, password
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [authentication, setAuth] = useState(false);
	const [validationError, setValidationError] = useState(false);
	const [errorMsg, setErrorMsg] = useState("");

	return (
		<div className="loginWindow">
			<form onSubmit={handleSubmit}>
				{validationError ? (
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
				<div className="container">
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
							placeholder="Email"
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
							placeholder="Password"
						/>
					</div>
					<div style={{ marginBottom: "20px" }}>
						<button type="submit" className="btn btn-light">
							Login
						</button>
					</div>

					<div className="footer">
						Do not have an account?
						<Link to={"/register"}> Sign up</Link>
					</div>
				</div>

				{authentication ? <Redirect to="/home" /> : null}
			</form>
		</div>
	);
};
