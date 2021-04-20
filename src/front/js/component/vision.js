import React, { useState, useEffect, useContext } from "react";
import { func } from "prop-types";
import "../../styles/vision.css";

// Function to print the cards that explain how the website works
export function Vision() {
	return (
		<div className="visionBox">
			<div className="vision">
				<h1>Vision</h1>
				<p className="visionText">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis ante pulvinar, laoreet leo at,
					tempor turpis. Vestibulum nisl diam, cursus at fermentum ac, scelerisque vel ipsum. Curabitur ac
					molestie leo. Vestibulum eu aliquam arcu. Donec pulvinar vestibulum blandit. Nunc vel turpis at elit
					commodo gravida eu at dolor. Nulla ac augue turpis. Donec volutpat facilisis nunc. Pellentesque
					feugiat neque id odio aliquam blandit. Vivamus posuere congue mi vitae interdum. Sed aliquam lacus
					sed erat tincidunt eleifend. Quisque eros lacus
				</p>
			</div>
			<div className="visionImg">
				<img
					style={{ width: "50%", height: "300px" }}
					src="https://axrjaco.com/wp-content/uploads/2019/03/animal-aquatic-marine-life-1618606.jpg"></img>
			</div>
		</div>
	);
}
