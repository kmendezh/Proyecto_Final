import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams, Redirect } from "react-router-dom";
import { TourCard } from "../component/tourCard";
import { func } from "prop-types";

export const SocialFeed = prop => {
	// Get Store
	const { store, actions } = useContext(Context);

	return (
		<div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
			<TourCard />
		</div>
	);
};
