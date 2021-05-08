import React, { Component } from "react";
import { Container, Image, Col, Row, Dropdown, Form, Jumbotron } from "react-bootstrap";
import { FcCameraIdentification } from "react-icons/fc";
import "../../styles/perfil.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext, useState, useEffect } from "react";

<<<<<<< HEAD
export const Perfil = () => {
	return (
		<Container fluid>
			<div className="miperfil">
				<h1>
					Mi perfil <i className="fas fa-user-alt" style={{ fontSize: "40px" }} />
				</h1>
			</div>
			<Row>
				<Col xs={6} md={4}>
					<Image
						src="https://miperfil.ucr.ac.cr/static/ucr/img/miperfil/PORTADA-500X500.png"
						roundedCircle
						height="400px"
					/>
					<h1>
						<button type="button" className="btn btn-secondary">
							Edit profile
						</button>
					</h1>
					{/* <h2>Estudiante de 4Geeks</h2>
					<h2>Amante de la naturaleza</h2> */}
				</Col>
				<Col xs={6} md={4} className="d-flex flex-wrap align-content-center">
					<h1>Informacion personal</h1>
					<h2>Nombre:Yeison Diaz</h2>
					<h2>Email:fake@gmail.com</h2>
					<h2>Publicaciones:9</h2>
				</Col>
				<Col xs={6} md={3} className="d-flex flex-wrap align-content-center">
					<h1>Acerca de mi</h1>
					<h2>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						the industrys.
					</h2>
				</Col>
			</Row>

			<br />
			<br />
			<br />
			<div>
				<Dropdown>
					<Dropdown.Toggle variant="success" id="dropdown-basic">
						<i className="fas fa-plus" style={{ fontSize: "40px" }} />
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Form>
							<Form.File id="custom-file" label="Custom file input" custom />
						</Form>
					</Dropdown.Menu>
				</Dropdown>
				<h1>
					<strong>Nuevo Post</strong>
				</h1>
			</div>

			<br />
			<br />
			<br />
			<div className="publicacionestitle">
				<h1>
					{" "}
					<i className="fas fa-angle-double-down" /> Tus Publicaciones{" "}
					<i className="fas fa-angle-double-down" />
				</h1>
			</div>
			<Row className="fotos">
				<Col md={3} padding-top="80px">
					<Image
						src="https://d3rr2gvhjw0wwy.cloudfront.net/uploads/activity_galleries/100633/2000x2000-0-70-d0baf99fc50080357acf1a94d904a129.jpg"
						rounded
						height="400px"
						width="400px"
					/>
				</Col>
				<Col md={3}>
					{" "}
					<Image
						src="https://i.pinimg.com/originals/28/d5/40/28d5405186b959a79d872cd4fac9d0fc.jpg"
						rounded
						height="400px"
						width="400px"
					/>
				</Col>
=======
export function Perfil() {
	// Get Store
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getCredentials();
		console.log("Credentials", store.credentials);
	}, []);
>>>>>>> bcc9734a9eb9a9559c8827b009bf31488edbea4e

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
							<Dropdown>
								<Dropdown.Toggle id="dropdown-basic">Nuevo post</Dropdown.Toggle>

								<Dropdown.Menu>
									<Dropdown.Item href="#/action-1">
										<form>
											<div className="row pt-5 mx-auto">
												<div className="col-8 form-group mx-auto">
													<input type="text" className="form-control" placeholder="URL" />
												</div>
												<div className="col-8 form-group  pt-2 mx-auto">
													<input type="text" className="form-control" placeholder="Título" />
												</div>
												<div className="col-8 form-group  pt-2 mx-auto">
													<input
														type="text"
														className="form-control"
														placeholder="Duración"
													/>
												</div>
												<div className="col-8 form-group  pt-2 mx-auto"></div>
											</div>
										</form>
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
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
