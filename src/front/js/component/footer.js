import React, { Component } from "react";
import "../../styles/footer.css";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<div className="col item social">
			<a href="https://www.facebook.com/PuraVidaPassport/" target="_blank" rel="noopener noreferrer">
				<i className="fab fa-facebook-f" />
			</a>
			<a href="#">
				<i className="fab fa-twitter" />
			</a>
			<a href="#">
				<i className="fab fa-snapchat-ghost" />
			</a>
			<a href="#">
				<i className="fab fa-instagram" />
			</a>
		</div>
	</footer>
);
