import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { CardHowItWorks } from "../component/cardHowItWorks";
import { Vision } from "../component/vision";
import { Mision } from "../component/mision";

// Array de objetos con descripcion, url y titulo de cartas - Seccion 'Como funciona?'
const cardsArray = [
	{
		title: "Explorá nuevos lugares",
		url: "https://p0.pikist.com/photos/379/564/sloth-costa-rica-puerto-viejo-rainforest-travel-nature.jpg",
		desc: "Visitá nuestro sitio para conocer nuevos lugares de Costa Rica",
		link: "/social"
	},
	{
		title: "Visitá hoteles y restaurantes",
		url: "https://www.hotels-costarica.cr/wp-content/uploads/2020/06/Gaia-panoramica.jpg",
		desc: "Complementa el tour con las múltiples opciones de Restaurantes y Hoteles que hay a tu disposición",
		link: "/hotelesrestaurantes"
	},
	{
		title: "Formá parte de nuestra red social",
		url: "https://myguanacastevacation.com/wp-content/uploads/2019/04/Stress-and-Anxiety-nature-1024x683.jpg",
		desc: "Crea un perfil y comparte los tours que has hecho con los demás",
		link: "/login"
	}
];

export const Home = () => {
	const displayCards = cardsArray.map((element, index) => <CardHowItWorks key={index} cardInfo={element} />);

	return (
		<div>
			<div className="wrapper">
				<video autoPlay loop muted>
					<source
						src="https://player.vimeo.com/external/291648067.sd.mp4?s=7f9ee1f8ec1e5376027e4a6d1d05d5738b2fbb29&profile_id=164&oauth2_token_id=57447761"
						type="video/mp4"
					/>
				</video>
				<h1>Costa Rica</h1>
			</div>
			<div className="resenaBox">
				<h1 className="resenaTitle">Reseña</h1>
				<p className="resenaText">
					Somos una red social que ofrece sugerencias de viajes o tours en Costa Rica a partir de las
					experiencias de nuestros usuarios
				</p>
			</div>
			<div className="howItWorks">
				<div className="howItWorksTitleBox">
					<h1 className="howItWorksTitle">¿Cómo funciona?</h1>
				</div>
				<div className="row" style={{ width: "75%", margin: "auto" }}>
					{displayCards}
				</div>
			</div>
			<Vision />
			<Mision />
		</div>
	);
};
