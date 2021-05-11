import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

export const Footer = () => {
	return (
		<div className="footerContainer">
			<div className="footerTitleContainer">
				<h1 className="footerTitle"> Paraiso Natural </h1>
			</div>
			<div className="iconContainer">
				<div>
					<i className="fab fa-twitter"></i>
				</div>
				<div>
					<i className="fab fa-facebook"></i>
				</div>
				<div>
					<i className="fab fa-instagram"></i>
				</div>
				<div>
					<i className="fab fa-pinterest"></i>
				</div>
			</div>
			<div className="shortcuts">
				<div>
					<Link className="shortCutText" to={"/contact"} style={{ textDecoration: "none" }}>
						Contacto
					</Link>
				</div>
				<div className="shortCutText">|</div>
				<div>
					<Link className="shortCutText" to={"/login"} style={{ textDecoration: "none" }}>
						Regístrate
					</Link>
				</div>
				<div className="shortCutText">|</div>
				<div>
					<Link className="shortCutText" to={"/hotelesrestaurantes"} style={{ textDecoration: "none" }}>
						Aliados
					</Link>
				</div>
				<div className="shortCutText">|</div>
				<div>
					<Link className="shortCutText" to={"/social"} style={{ textDecoration: "none" }}>
						Explora
					</Link>
				</div>
			</div>
			<div className="copyrightContainer">@Copyright 2021. Title. All rights reserved</div>
		</div>
	);
};
