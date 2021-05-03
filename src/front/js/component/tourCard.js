import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams, Redirect } from "react-router-dom";
import "../../styles/tourCard.css";
import { func } from "prop-types";

export const TourCard = prop => {
	return (
		<div className = "cardTourContainer">
			<div
				className="cardTourImage">
			</div>
            <div className="cardTourText">

            </div>
		</div>
	);
};
