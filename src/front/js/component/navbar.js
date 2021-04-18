import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<div className="navBox">
			<div>
				<Link className="navItem">Inicio</Link>
			</div>
			<div>
				<Link className="navItem">Social</Link>
			</div>
			<div>
				<Link className="navItem">Hoteles y Restaurantes</Link>
			</div>
			<div>
				<Link className="navItem">Perfil</Link>
			</div>
			<div>
				<Link className="navItem">Contacto</Link>
			</div>
		</div>
	);
};
