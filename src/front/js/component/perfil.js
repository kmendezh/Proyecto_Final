import React, { Component } from "react";
import { Container, Image, Col, Row, Dropdown, Form, Jumbotron } from "react-bootstrap";
import { FcCameraIdentification } from "react-icons/fc";
import "../../styles/perfil.css";
import { Link } from "react-router-dom";

// export const Perfil = () => {
// 	return (
// 		<div className="container-fluid perfil ">
// 			<div className="imagenportada d-flex justify-content-center">
// 				<img
// 					src="https://i0.wp.com/www.diversidadyunpocodetodo.com/wp-content/uploads/2017/07/286-01-Tucan-pechigualdo-Costa-Rica-7243.jpg?ssl=1"
// 					width="80%"
// 					height="600px"
// 				/>
// 			</div>
// 			<div className="row bodyperfil">
// 				<div className="Col xs={6} md={2}">
// 					<Image
// 						src="https://miperfil.ucr.ac.cr/static/ucr/img/miperfil/PORTADA-500X500.png"
// 						roundedCircle
// 						height="400px"
// 					/>
// 				</div>
// 				<div className="Col xs={6} md={3}">
// 					<h1>Informacion personal</h1>
// 					<h2>
// 						<i className="fas fa-user"></i> Nombre:Yeison Diaz
// 					</h2>
// 					<h2>
// 						{" "}
// 						<i className="fas fa-envelope"></i>Email:fake@gmail.com
// 					</h2>
// 					<h2>
// 						<i className="fas fa-map-marked"></i>Publicaciones:9
// 					</h2>
// 				</div>
// 				<div className="Col xs={6} md={3}">
// 					<h1>Acerca de mi</h1>
// 					<h2>Soy un estudiante de 4weeks Academy,actualmente me preparo para ser un Full Stack Developer</h2>
// 				</div>
// 			</div>

// 			<br></br>
// 			<br></br>
// 			<br></br>
// 			<div className="postnuevo">
// 				<Dropdown>
// 					<Dropdown.Toggle variant="success" id="dropdown-basic">
// 						<i className="fas fa-plus" style={{ fontSize: "40px" }} />
// 					</Dropdown.Toggle>

// 					<Dropdown.Menu>
// 						<Form>
// 							<Form.File id="custom-file" label="Custom file input" custom />
// 						</Form>
// 					</Dropdown.Menu>
// 				</Dropdown>
// 				<h1>
// 					<strong>Nuevo Post</strong>
// 				</h1>
// 			</div>

// 			<br></br>
// 			<br></br>
// 			<br></br>
// 			<div className="publicacionestitle">
// 				<h1>
// 					{" "}
// 					<i className="fas fa-angle-double-down"></i> Tus Publicaciones{" "}
// 					<i className="fas fa-angle-double-down"></i>
// 				</h1>
// 			</div>
// 			<Row className="fotos">
// 				<Col md={3} padding-top="80px">
// 					<Image
// 						src="https://d3rr2gvhjw0wwy.cloudfront.net/uploads/activity_galleries/100633/2000x2000-0-70-d0baf99fc50080357acf1a94d904a129.jpg"
// 						rounded
// 						height="400px"
// 						width="400px"
// 					/>
// 				</Col>
// 				<Col md={3}>
// 					{" "}
// 					<Image
// 						src="https://i.pinimg.com/originals/28/d5/40/28d5405186b959a79d872cd4fac9d0fc.jpg"
// 						rounded
// 						height="400px"
// 						width="400px"
// 					/>
// 				</Col>

// 				<Col md={3}>
// 					{" "}
// 					<Image
// 						src="http://2.bp.blogspot.com/-lUKT2caLrq8/VpcDxfvAzbI/AAAAAAAABm4/5CxokkmOi-k/s1600/20150212_153306.jpg"
// 						rounded
// 						height="400px"
// 						width="400px"
// 					/>
// 				</Col>

// 				<Col md={3}>
// 					<Image
// 						src="https://puravidaguide.com/wp-content/uploads/2017/02/16602322_1859650827654347_4619721850299879966_o-3.jpg"
// 						rounded
// 						height="400px"
// 						width="400px"
// 					/>
// 				</Col>

// 				<Col md={3}>
// 					<Image
// 						src="https://lh3.googleusercontent.com/-plANZqem4RE/VqnF2uwR4BI/AAAAAAABLKA/6jNRoYvAP4o/rio-celeste-3%25255B6%25255D.jpg?imgmax=800"
// 						rounded
// 						height="400px"
// 						width="400px"
// 					/>
// 				</Col>

// 				<Col md={3}>
// 					{" "}
// 					<Image
// 						src="https://image.arrivalguides.com/415x300/12/88af71119da67f372a38ef406927ac42.jpg"
// 						rounded
// 						height="400px"
// 						width="400px"
// 					/>
// 				</Col>

// 				<Col md={3}>
// 					{" "}
// 					<Image
// 						src="https://i0.wp.com/red-viajes.com/wp-content/uploads/2019/09/como-visitar-el-parque-nacional-volcan-poas-de-costa-rica.jpg"
// 						rounded
// 						height="400px"
// 						width="400px"
// 					/>
// 				</Col>

// 				<Col md={3}>
// 					<Image
// 						src="https://conozcasucanton.com/wp-content/uploads/sites/11/2017/07/Poza-Cajon-Puriscal.jpg"
// 						rounded
// 						height="400px"
// 						width="400px"
// 					/>
// 				</Col>
// 			</Row>
// 		</div>
// 	);
// };

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
						<div className="nuevopost">
							<Dropdown>
								<Dropdown.Toggle id="dropdown-basic">Dropdown Button</Dropdown.Toggle>

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
									{/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
									<Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
								</Dropdown.Menu>
							</Dropdown>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
