import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams, Redirect } from "react-router-dom";
import "../../styles/tourCard.css";
import { func } from "prop-types";

export const TourCard = () => {
	const starClasses = ["far fa-star", "fas fa-star", "fas fa-star-half-alt"];

	const rating = "70%";
	const rateStars = (70 * 5) / 100;

	// Print the rate

	return (
		<div className="cardTourContainer">
			<div className="cardTourImage">
				<img
					src="https://lh3.googleusercontent.com/proxy/vMBlS81XFArPth02ua-LNJd-zO5R_3XenTXoujoXPYcRWsZsAFv67klrn4IAze1GZI-S6X6Rn-r-gxoCrpJFFefqtXHC2SiMbogNpiNO3cbJpvenxdWyhjJXH3eNVuMwGiXIAZp4qs8Gt3jlL_Bcz3aM9hqijpNm93ouP72nkyT6Zg"
					style={{ width: "100%", height: "100%" }}></img>
			</div>
			<div className="cardTourText">
				<div className="rateContainer">
					<div
						className="stars"
						style={{
							backgroundImage: `linear-gradient(90deg, rgb(0, 149, 175) ${rating}, white ${rating})`
						}}>
						★★★★★
					</div>
					<div className="starRate">({rateStars})</div>
				</div>

				<div className="tourItems">
					<strong> Título </strong>
				</div>
				<div className="tourItems">
					<strong> Dificultad </strong>
				</div>
				<div className="tourItems">
					<strong> Duración </strong>
				</div>
			</div>
		</div>
	);
};
