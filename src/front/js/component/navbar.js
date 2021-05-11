import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import LogoParaiso from "/workspace/Proyecto_Final/src/front/img/logo_paraiso.png";

export const Navbar = () => {
	return (
		<div className="navBox">
			<div className="flex-item">
				<Link to="/">
					<img src={LogoParaiso} className="logo" />
				</Link>
			</div>
			<div>
				<Link to={"/"} className="navItem">
					Inicio <i className="fas fa-map-marked" style={{ fontSize: "20px" }} />{" "}
				</Link>
			</div>
			<div>
				<Link to={"/social"} className="navItem">
					Social <i className="fas fa-images" style={{ fontSize: "20px" }} />
				</Link>
			</div>
			<div>
				<Link to={"/hotelesrestaurantes"} className="navItem">
					Hoteles y Restaurantes <i className="fas fa-hotel" style={{ fontSize: "20px" }} />
				</Link>
			</div>
			<div>
				<Link to={"/login"} className="navItem">
					Perfil <i className="fas fa-user-alt" style={{ fontSize: "20px" }} />
				</Link>
			</div>
			<div>
				<Link to={"/contact"} className="navItem">
					Contacto <i className="fas fa-address-card" style={{ fontSize: "20px" }} />
				</Link>
			</div>
		</div>
	);
};
