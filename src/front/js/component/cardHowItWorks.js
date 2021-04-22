import React, { useState, useEffect, useContext } from "react";
import { func } from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/cardHowItWorks.css";

// Function to print the cards that explain how the website works
export function CardHowItWorks(prop) {
	return (
		<div className="col-4 pt-4 pb-4">
			<div className="card">
				<Link to={prop.cardInfo.link}>
					<img className="card-img-top" src={prop.cardInfo.url} alt="Card image cap" />
				</Link>

				<div className="card-body cardText">
					<h1 className="cardText">
						<strong>{prop.cardInfo.title}</strong>
					</h1>
					<p>{prop.cardInfo.desc}</p>
				</div>
			</div>
		</div>
	);
}
