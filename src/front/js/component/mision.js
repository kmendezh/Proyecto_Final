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
				<p className="misionText">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis ante pulvinar, laoreet leo at,
					tempor turpis. Vestibulum nisl diam, cursus at fermentum ac, scelerisque vel ipsum. Curabitur ac
					molestie leo. Vestibulum eu aliquam arcu. Donec pulvinar vestibulum blandit. Nunc vel turpis at elit
					commodo gravida eu at dolor. Nulla ac augue turpis. Donec volutpat facilisis nunc. Pellentesque
					feugiat neque id odio aliquam blandit. Vivamus posuere congue mi vitae interdum. Sed aliquam lacus
					sed erat tincidunt eleifend. Quisque eros lacus
				</p>
			</div>
		</div>
	);
}
