import React, { Component } from "react";
import { Container, Image, Col, Row, Dropdown, Form } from "react-bootstrap";
import { FcCameraIdentification } from "react-icons/fc";
import "../../styles/perfil.css";
import { Link } from "react-router-dom";

export const Perfil = () => {
	return (
		<Container cont1 fluid>
			<div className="miperfil">
				<h1>Mi perfil</h1>
			</div>
			<Row>
				<Col xs={6} md={4}>
					<Image
						src="https://image.freepik.com/vector-gratis/idea-bombilla-hombre_98292-5239.jpg"
						roundedCircle
						height="400px"
					/>
					<h1>
						<strong> Yeison Diaz</strong>
					</h1>
					<h2>Estudiante de 4Geeks</h2>
					<h2>Amante de la naturaleza</h2>
				</Col>
				<Col xs={6} md={4} className="d-flex flex-wrap align-content-center">
					<h1>Informacion personal</h1>
					<h2>Nombre:Yeison Diaz</h2>
					<h2>Email:fake@gmail.com</h2>
					<h2>Publicaciones:9</h2>
					<h2>edad:27</h2>
					<h2>amigos:340</h2>
				</Col>
				<Col xs={6} md={3} className="d-flex flex-wrap align-content-center">
					<h1>Acerca de mi</h1>
					<h2>
						orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						the industrys standard dummy text ever since the 1500s, when an unknown printer
					</h2>
				</Col>
			</Row>

			<br></br>
			<br></br>
			<br></br>
			<div>
				<Dropdown>
					<Dropdown.Toggle variant="success" id="dropdown-basic">
						<FcCameraIdentification />
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Form>
							<Form.File id="custom-file" label="Custom file input" custom />
						</Form>
					</Dropdown.Menu>
				</Dropdown>
				nuevo post
			</div>
			<br></br>
			<br></br>
			<br></br>
			<div className="publicacionestitle">
				<h1>Tus Publicaciones</h1>
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

				{/* <div className="col mb-5">
					<div className="card h-100">
						<img
							src="https://d3rr2gvhjw0wwy.cloudfront.net/uploads/activity_galleries/100633/2000x2000-0-70-d0baf99fc50080357acf1a94d904a129.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-footer text-right">
							<Link to={""}>
								<button type="button" className="btn btn-outline-info">
									ver publicacion!
								</button>
							</Link>
						</div>
					</div>
				</div> */}
				<Col md={3}>
					{" "}
					<Image
						src="https://i.pinimg.com/originals/28/d5/40/28d5405186b959a79d872cd4fac9d0fc.jpg"
						rounded
						height="400px"
						width="400px"
					/>
				</Col>
				{/* <div className="col mb-5">
					<div className="card h-100">
						<img
							src="https://d3rr2gvhjw0wwy.cloudfront.net/uploads/activity_galleries/100633/2000x2000-0-70-d0baf99fc50080357acf1a94d904a129.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-footer text-right">
							<Link to={""}>
								<button type="button" className="btn btn-outline-info">
									ver publicacion!
								</button>
							</Link>
						</div>
					</div>
				</div> */}
				<Col md={3}>
					{" "}
					<Image
						src="http://2.bp.blogspot.com/-lUKT2caLrq8/VpcDxfvAzbI/AAAAAAAABm4/5CxokkmOi-k/s1600/20150212_153306.jpg"
						rounded
						height="400px"
						width="400px"
					/>
				</Col>
				{/* <div className="col mb-5">
					<div className="card h-100">
						<img
							src="https://d3rr2gvhjw0wwy.cloudfront.net/uploads/activity_galleries/100633/2000x2000-0-70-d0baf99fc50080357acf1a94d904a129.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-footer text-right">
							<Link to={""}>
								<button type="button" className="btn btn-outline-info">
									ver publicacion!
								</button>
							</Link>
						</div>
					</div>
				</div> */}
				<Col md={3}>
					<Image
						src="https://puravidaguide.com/wp-content/uploads/2017/02/16602322_1859650827654347_4619721850299879966_o-3.jpg"
						rounded
						height="400px"
						width="400px"
					/>
				</Col>
				{/* <div className="col mb-3">
					<div className="card h-100">
						<img
							src="https://d3rr2gvhjw0wwy.cloudfront.net/uploads/activity_galleries/100633/2000x2000-0-70-d0baf99fc50080357acf1a94d904a129.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-footer text-right">
							<Link to={""}>
								<button type="button" className="btn btn-outline-info">
									ver publicacion!
								</button>
							</Link>
						</div>
					</div>
				</div> */}
				<Col md={3}>
					<Image
						src="https://lh3.googleusercontent.com/-plANZqem4RE/VqnF2uwR4BI/AAAAAAABLKA/6jNRoYvAP4o/rio-celeste-3%25255B6%25255D.jpg?imgmax=800"
						rounded
						height="400px"
						width="400px"
					/>
				</Col>
				{/* <div className="col mb-3">
					<div className="card h-100">
						<img
							src="https://d3rr2gvhjw0wwy.cloudfront.net/uploads/activity_galleries/100633/2000x2000-0-70-d0baf99fc50080357acf1a94d904a129.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-footer text-right">
							<Link to={""}>
								<button type="button" className="btn btn-outline-info">
									ver publicacion!
								</button>
							</Link>
						</div>
					</div>
				</div> */}
				<Col md={3}>
					{" "}
					<Image
						src="https://image.arrivalguides.com/415x300/12/88af71119da67f372a38ef406927ac42.jpg"
						rounded
						height="400px"
						width="400px"
					/>
				</Col>
				{/* <div className="col mb-3">
					<div className="card h-100">
						<img
							src="https://d3rr2gvhjw0wwy.cloudfront.net/uploads/activity_galleries/100633/2000x2000-0-70-d0baf99fc50080357acf1a94d904a129.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-footer text-right">
							<Link to={""}>
								<button type="button" className="btn btn-outline-info">
									ver publicacion!
								</button>
							</Link>
						</div>
					</div>
				</div> */}
				<Col md={3}>
					{" "}
					<Image
						src="https://i0.wp.com/red-viajes.com/wp-content/uploads/2019/09/como-visitar-el-parque-nacional-volcan-poas-de-costa-rica.jpg"
						rounded
						height="400px"
						width="400px"
					/>
				</Col>
				{/* <div className="col mb-3">
					<div className="card h-100">
						<img
							src="https://d3rr2gvhjw0wwy.cloudfront.net/uploads/activity_galleries/100633/2000x2000-0-70-d0baf99fc50080357acf1a94d904a129.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-footer text-right">
							<Link to={""}>
								<button type="button" className="btn btn-outline-info">
									ver publicacion!
								</button>
							</Link>
						</div>
					</div>
				</div> */}
				<Col md={3}>
					<Image
						src="https://conozcasucanton.com/wp-content/uploads/sites/11/2017/07/Poza-Cajon-Puriscal.jpg"
						rounded
						height="400px"
						width="400px"
					/>
				</Col>
			</Row>

			{/* <div className="col mb-3">
				<div className="card h-100">
					<img
						src="https://conozcasucanton.com/wp-content/uploads/sites/11/2017/07/Poza-Cajon-Puriscal.jpg"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-footer text-right">
						<Link to={""}>
							<button type="button" className="btn btn-outline-info">
								ver publicacion!
							</button>
						</Link>
					</div>
				</div>
			</div> */}
		</Container>
	);
};
