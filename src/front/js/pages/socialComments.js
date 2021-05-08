import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams, Redirect } from "react-router-dom";
import { func } from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";
import "../../styles/socialComment.css";
import { bindActionCreators } from "redux";

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

	useEffect(() => {
		actions.getPostById(postId);
	}, []);

	return (
		<div className="socialCommentContainer">
			<div className="socialCommentImage">
				<img src={store.postById.url} style={{ width: "100%", height: "100%", objectFit: "cover" }}></img>
			</div>
			<div className="socialCommentText">
				<ul>
					<li>
						{" "}
						<strong> Titulo: </strong> {store.postById.title}
					</li>

					<li>
						{" "}
						<strong> Provincia: </strong> {store.postById.provincia}
					</li>
					<li>
						{" "}
						<strong> Dificultad: </strong> {store.postById.dificultad}
					</li>
					<li>
						{" "}
						<strong> Duración: </strong> {store.postById.duracion} min
					</li>
					<li>
						{" "}
						<strong> Puntuación: </strong> {store.postById.total_like / 10}
					</li>
					<li>
						{" "}
						<strong> Descripción: </strong> {store.postById.comment}
					</li>
				</ul>
			</div>
		</div>
	);
};
