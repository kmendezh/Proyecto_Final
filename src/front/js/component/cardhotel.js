import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/hoteles.css";

const CardHotel = props => {
	return (
		<div className="col-2 m-1 p-0">
			<div className="card ml-2">
				<img className="card-img-top" src={props.link} alt="Card image cap" />
				<div className="card-body cardText">
					<div>
						<div className="d-flex justify-content-center">
							<h5 className="card-title">{props.title} </h5>
						</div>
						<div className="d-flex flex-column p-0">
							<p className="p-0">Descuentos: {props.descuento} %</p>
						</div>
						<Link to={""}>
							<button type="button" className="btn btn-outline-primary">
								Ver mas
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

CardHotel.propTypes = {
	link: PropTypes.string,
	title: PropTypes.string,
	descuento: PropTypes.number
};

export default CardHotel;
