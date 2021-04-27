import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams, Redirect } from "react-router-dom";
import "../../styles/social.css";
import { SocialHome } from "../component/socialHome";

export const SocialPage = () => {
	return (
		<div style={{ marginTop: "20px", marginBottom: "20px" }}>
			<SocialHome />
		</div>
	);
};
