import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams, Redirect } from "react-router-dom";
import "../../styles/socialCardsState.css";
import { func } from "prop-types";

export const SocialCardsState = prop => {
	console.log("Height: ", prop.height);
	console.log("Width: ", prop.width);
	console.log("url: ", prop.url);
	return (
		<div>
			<div
				className="cardState"
				style={{ height: prop.height, width: prop.width, backgroundImage: `url(${prop.url})` }}>
				<h1>{prop.state}</h1>
				<p>
					{" "}
					Min: {prop.tmpMin} ° C, Max: {prop.tmpMin} ° C, Clima <i className={prop.weather}></i>
				</p>
			</div>
		</div>
	);
};
