import React, { useState, useEffect, useContext } from "react";
import { func } from "prop-types";
import "../../styles/vision.css";

// Function to print the cards that explain how the website works
export function Vision() {
	return (
		<div className="visionBox">
			<div className="vision">
				<h1 className="visionHeader">Vision</h1>
				<p className="visionText">
					Ser la red social número uno de consulta sobre destinos turísticos en Costa Rica con una amplia base
					de datos en tours, hoteles y restaurantes. A partir de la red social social, se busca compartir
					experiencias que permitan promover el turismo nacional y generar una red de aliados para fomentar la
					economía nacional
				</p>
			</div>
			<div className="visionImg">
				<img
					style={{ width: "50%", height: "300px" }}
					src="https://axrjaco.com/wp-content/uploads/2019/03/animal-aquatic-marine-life-1618606.jpg"
				/>
			</div>
		</div>
	);
}
