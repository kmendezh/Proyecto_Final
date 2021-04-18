import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { CardHowItWorks } from "../component/cardHowItWorks";

// Array de objetos con descripcion, url y titulo de cartas
const cardsArray = [
	{
		title: "Explorá nuevos lugares",
		url: "https://p0.pikist.com/photos/379/564/sloth-costa-rica-puerto-viejo-rainforest-travel-nature.jpg",
		desc: "Visitá nuestro sitio para conocer nuevos lugares de Costa Rica"
	},
	{
		title: "Visitá hoteles y restaurantes cerca de tu sitio de destino",
		url: "https://www.hotels-costarica.cr/wp-content/uploads/2020/06/Gaia-panoramica.jpg",
		desc: "Complementa el tour con las múltiples opciones de Restaurantes y Hoteles que hay a tu disposición"
	},
	{
		title: "Formá parte de nuestra red social",
		url: "https://myguanacastevacation.com/wp-content/uploads/2019/04/Stress-and-Anxiety-nature-1024x683.jpg",
		desc: "Crea un perfil y comparte los tours que has hecho con los demás"
	}
];

export const Home = () => {
	const displayCards = cardsArray.map((element, index) => <CardHowItWorks key={index} cardInfo={element} />);

	return (
		<div>
			<div className="mainContainer">
				<div className="titleContainer">
					<Link className="titleText">Costa Rica</Link>
				</div>
			</div>
			<div className="resenaBox">
				<h1 className="resenaTitle">Reseña</h1>
				<p className="resenaText">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet mauris ex, ut rutrum urna
					pulvinar in. Nunc convallis at turpis in convallis. Morbi molestie euismod odio non pretium. Fusce.
				</p>
				<img
					className="resenaImg"
					src="https://www.larepublica.net/storage/images/2020/07/08/20200708143152.flor-tropical.jpg"></img>
			</div>
			<div className="howItWorks">
				<div className="howItWorksTitleBox">
					<h1 className="howItWorksTitle">¿Cómo funciona?</h1>
				</div>
				<div className="row" style={{ width: "75%", margin: "auto" }}>
					{displayCards}
				</div>
			</div>
		</div>
	);
};
