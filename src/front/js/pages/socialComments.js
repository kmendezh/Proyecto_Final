import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams, Redirect } from "react-router-dom";
import { func } from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";
import "../../styles/socialComment.css";

export const SocialComment = () => {
	// Get Store
	const { store, actions } = useContext(Context);
	const params = useParams();

	let postId = params.postId;

	// Store the param id in the session storage in case that the page be updated
	if (postId == undefined) {
		postId = sessionStorage.getItem("postID");
	} else {
		sessionStorage.setItem("postID", postId);
	}

	return (
		<div className="socialCommentContainer">
			<div className="socialCommentImage"></div>
			<div className="socialCommentText">
				<ul>
					<li></li>
				</ul>
			</div>
		</div>
	);
};
