import React, { useState, useEffect, useContext } from "react";
import { func } from "prop-types";
import "../../styles/mision.css";

// Function to print the cards that explain how the website works
export function Mision() {
	return (
		<div className="misionBox">
			<div className="misionImg">
				<img
					style={{ width: "50%", height: "300px" }}
					src="https://www.guanacastealaaltura.com/media/k2/items/cache/0a7d97071828da65151775fc572477c0_XL.jpg?t=20200524_175218"
				/>
			</div>
			<div className="mision">
				<h1 className="misionHeader">Mision</h1>
<<<<<<< HEAD
				<p className="misionText">prueba</p>
=======
				<p className="misionText">
					Ofrecer un servicio de calidad y confiabilidad, a través de la red social diseñada para ofrecer
					variedad de viajes y experiencias, logrando superar las expectativas de nuestros clientes. Promover
					el turismo nacional a partir de las experiencias de los usuarios y poder dar a conocer los múltiples
					destinos turísticos que posee Costa Rica
				</p>
>>>>>>> bcc9734a9eb9a9559c8827b009bf31488edbea4e
			</div>
		</div>
	);
}
