import React, { Component } from "react";
import { Container, Image, Col, Row, Dropdown, Form, Jumbotron } from "react-bootstrap";
import { FcCameraIdentification } from "react-icons/fc";
import "../../styles/perfil.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext, useState, useEffect } from "react";
import { TourCard } from "../component/tourCard";

export function Perfil() {
	// Get Store
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getCredentials();
		actions.getPostByUserId();
		console.log("Credentials", store.credentials);
	}, []);

	let Postbyuserid = store.postByUser.map((element, index) => <TourCard key={element.id} cardInfo={element} />);

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
						<h4>Datos personales</h4>
						<h4>
							<i className="fas fa-user"></i> {store.credentials.username}
						</h4>
						<h4>
							{" "}
							<i className="fas fa-envelope"></i> {store.credentials.email}
						</h4>
						<h4>
							<i className="fas fa-map-marked"></i> Publicaciones: {store.postByUser.length}
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
							<h1 className="text-center text-white ">
								<strong>{store.credentials.username}</strong>
							</h1>
						</div>
						<div className="fotoportada">
							<img src="https://i0.wp.com/www.diversidadyunpocodetodo.com/wp-content/uploads/2017/07/286-01-Tucan-pechigualdo-Costa-Rica-7243.jpg?ssl=1" />
						</div>
					</div>
					<div className="Col-9 publicaciones">
						<div className="nuevopost d-flex justify-content-center">
							<Link to={"/newpost"} style={{ color: "white", paddingLeft: "2px" }}>
								{""}
								<h3>
									<i className="fas fa-map-marked" style={{ fontSize: "30px" }} />
									Nuevo Post
								</h3>{" "}
							</Link>
						</div>
						<div style={{ display: "flex", flexDirection: "row", flexWrap: "noWrap" }}>{Postbyuserid}</div>
					</div>
				</div>
			</div>
		</div>
	);
}
