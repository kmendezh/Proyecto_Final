import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams, Redirect } from "react-router-dom";
import { TourCard } from "../component/tourCard";
import { func } from "prop-types";

export const SocialFeed = () => {
	// Get Store
	const { store, actions } = useContext(Context);
	const params = useParams();

	// Index of the state that will be requested: SJ(0), Alajuela(1), Cartago(2), Heredia(3), Guanacaste(4),
	// Puntarenas (5), Limon (6)
	let stateIndex = params.stateId.toString();
	let statesNames = ["San Jose", "Alajuela", "Cartago", "Heredia", "Guanacaste", "Puntarenas", "Limon"];

	// Store the param id in the session storage in case that the page be updated
	if (stateIndex == undefined) {
		stateIndex = sessionStorage.getItem("stateID");
	} else {
		sessionStorage.setItem("stateID", stateIndex);
	}

	// Filter function
	const filterbyState = element => {
		return element.provincia == statesNames[stateIndex];
	};

	// Filter by the requested state
	let cardsToDisplay = store.posts.filter(filterbyState);
	console.log("Cards:", cardsToDisplay);

	// Render the element
	cardsToDisplay = cardsToDisplay.map((element, index) => <TourCard key={element.id} cardInfo={element} />);

	return <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>{cardsToDisplay}</div>;
};
