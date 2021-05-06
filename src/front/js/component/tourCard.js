import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams, Redirect } from "react-router-dom";
import "../../styles/tourCard.css";
import { func } from "prop-types";

export const TourCard = () => {
	const rating = "70%";
	const rateStars = 3.5;

	return (
		<div className="cardTourContainer">
			<div className="cardTourImage">
				<img
					src="https://media-cdn.tripadvisor.com/media/photo-c/2560x500/08/16/c8/57/issys-tours-costa-rica.jpg"
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
