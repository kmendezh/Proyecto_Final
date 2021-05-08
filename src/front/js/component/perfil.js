import React, { Component } from "react";
import { Container, Image, Col, Row, Dropdown, Form, Jumbotron } from "react-bootstrap";
import { FcCameraIdentification } from "react-icons/fc";
import "../../styles/perfil.css";
import { Link } from "react-router-dom";

export function Perfil() {
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
							<strong>Yeison Diaz</strong>
						</h3>
					</div>
					<div>
						<h4>Datos personal</h4>
						<h4>
							<i className="fas fa-user"></i> Yeison Diaz
						</h4>
						<h4>
							{" "}
							<i className="fas fa-envelope"></i> fake@gmail.com
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
