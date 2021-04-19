import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<div className="navBox">
			<div>
				<Link className="navItem">
					Inicio <i className="fas fa-map-marked" style={{ fontSize: "48px" }}></i>{" "}
				</Link>
			</div>
			<div>
				<Link className="navItem">
					Social <i className="fas fa-images" style={{ fontSize: "48px" }}></i>
				</Link>
			</div>
			<div>
				<Link className="navItem">
					Hoteles y Restaurantes <i className="fas fa-hotel" style={{ fontSize: "48px" }}></i>
				</Link>
			</div>
			<div>
				<Link className="navItem">
					Perfil <i className="fas fa-user-alt" style={{ fontSize: "48px" }}></i>
				</Link>
			</div>
			<div>
				<Link className="navItem">
					Contacto <i className="fas fa-address-card" style={{ fontSize: "48px" }}></i>
				</Link>
			</div>
		</div>
	);
};
