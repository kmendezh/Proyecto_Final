import React, { Component } from "react";
import { Container, Image, Col, Row, Dropdown, Form, Jumbotron } from "react-bootstrap";
import { FcCameraIdentification } from "react-icons/fc";
import "../../styles/perfil.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext, useState, useEffect } from "react";

export function Perfil() {
	// Get Store
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getCredentials();
		console.log("Credentials", store.credentials);
	}, []);

	return (
		<div className="container-fluid perfilview">
			<div className="row">
				<div className="Col-3 menuizquierda">
					<div className="d-flex justify-content-between">
						<img
							src="https://thumbs.dreamstime.com/b/icono-de-la-persona-en-el-fondo-blanco-111394209.jpg
                            "
							height="80px"
							rounded
						/>
						<h3>
							<strong>{store.credentials.username}</strong>
						</h3>
					</div>
					<div>
						<h4>Datos personal</h4>
						<h4>
							<i className="fas fa-user"></i> {store.credentials.username}
						</h4>
						<h4>
							{" "}
							<i className="fas fa-envelope"></i> {store.credentials.email}
						</h4>
						<h4>
							<i className="fas fa-map-marked"></i> Publicaciones:9
						</h4>
						<h4>
							<i className="fas fa-sign-out-alt"></i> Log out
						</h4>
					</div>
				</div>

				<div className="Col-9 menuderecha">
					<div className="perfiltop d-flex justify-content-between">
						<div className="fotoynombre">
							<img
								src="https://thumbs.dreamstime.com/b/icono-de-la-persona-en-el-fondo-blanco-111394209.jpg"
								height="300px"
								rounded
							/>
							<h1 className="text-center text-white ">Nombre</h1>
						</div>
						<div className="fotoportada">
							<img src="https://i0.wp.com/www.diversidadyunpocodetodo.com/wp-content/uploads/2017/07/286-01-Tucan-pechigualdo-Costa-Rica-7243.jpg?ssl=1" />
						</div>
					</div>
					<div className="Col-9 publicaciones">
						<div className="nuevopost d-flex justify-content-center">
							<Link to={"/newpost"} style={{ color: "white", paddingLeft: "2px" }}>
								{""}
								crear nuevo post
							</Link>
						</div>
						<div className="arraydefotos">
							<div className="col-2 m-1 p-0">
								<img className="card-img-top" src="/images/pathToYourImage.png" alt="Card image cap" />
								<div className="card-body">
									<h4 className="card-title">Card title</h4>
									<p className="card-text">
										Some quick example text to build on the card title and make up the bulk of the
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
