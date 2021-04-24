import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CardHotel = props => {
	return (
		<div className="col-sm">
			<div className="card">
				<img className="card/-img-top w-100" src={props.link} alt="Card image cap" />
				<div className="card-body">
					<div>
						<div className="d-flex justify-content-center">
							<h5 className="card-title">{props.title} </h5>
						</div>
						<div className="d-flex flex-column p-0">
							<p className="p-0">Descuentos: {props.descuento} %</p>
						</div>
					</div>

					<div className="d-flex justify-content-between">
						<div>
							<Link to={""}>
								<button type="button" className="btn btn-outline-primary">
									Ver mas
								</button>
							</Link>
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
	descuento: PropTypes.number
};

export default CardHotel;
