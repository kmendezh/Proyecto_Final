import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/hoteles.css";

const CardHotel = props => {
	return (
		<div className="col-2 m-1 p-0">
			<div className="card ml-2">
				<img className="card-img-top foto" src={props.link} alt="Card image cap" />
				<div className="card-body cardText">
					<div>
						<div>
							<h5 className="card-title">{props.title} </h5>
						</div>
						<div className="d-flex flex-column p-0">
							<p>{props.descripcion}</p>
							<p className="p-0">
								Descuentos desde {props.descuento1} % hasta {props.descuento2} %{" "}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

CardHotel.propTypes = {
	link: PropTypes.string,
	title: PropTypes.string,
	descripcion: PropTypes.string,
	descuento1: PropTypes.number,
	descuento2: PropTypes.number
};

export default CardHotel;
