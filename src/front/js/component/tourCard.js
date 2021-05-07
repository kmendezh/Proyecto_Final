import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams, Redirect } from "react-router-dom";
import "../../styles/tourCard.css";
import { func } from "prop-types";

export const TourCard = prop => {
	// Calculate the rating
	let puntuacion = prop.cardInfo.total_like / 10;
	let starRating = ((100 * puntuacion) / 5).toString();
	starRating = starRating + "%";

	return (
		<div className="cardTourContainer">
			<div className="cardTourImage">
				<img src={prop.cardInfo.url} style={{ width: "100%", height: "100%" }}></img>
			</div>
			<div className="cardTourText">
				<div className="rateContainer">
					<div
						className="stars"
						style={{
							backgroundImage: `linear-gradient(90deg, rgb(0, 149, 175) ${starRating}, white ${starRating})`
						}}>
						★★★★★
					</div>
					<div className="starRate">({puntuacion})</div>
				</div>

				<div className="tourItems">
					<strong> Título: </strong> {prop.cardInfo.title}
				</div>
				<div className="tourItems">
					<strong> Dificultad: </strong> {prop.cardInfo.dificultad}
				</div>
				<div className="tourItems">
					<strong> Duración: </strong> {prop.cardInfo.duracion} min
				</div>
				<div className="tourItems iconTour">
					<i className="fas fa-comments iconSocial"></i>
					<i className="fas fa-star-half-alt iconSocial"></i>
					<button type="button" className="btn btn-info buttonSocial">
						Ver más
					</button>
				</div>
			</div>
		</div>
	);
};
