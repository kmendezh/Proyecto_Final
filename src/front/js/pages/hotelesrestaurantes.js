import React from "react";
import CardHotel from "../component/cardhotel";

export const Hoteles = () => {
	return (
		<div>
			<div className="mt-3 mb-3 ml-4">
				<h2>Puntarenas</h2>
			</div>
			<div className="row ml-2">
				<div className="list-group list-group-horizontal text-nowrap overflow-auto">
					<CardHotel
						link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmV4SyZpjhYeEV05a8kZFyVZ-UP9tcYlREdw&usqp=CAU"
						title="Hotel DoubleTree by Hilton"
						descuento={35}
					/>
					<CardHotel
						link="https://lh3.googleusercontent.com/proxy/G5nLeQv4W2ZzHyVmXzIozGtLkUdqRaBRcw43EjowyNx_ZQZbdD0XV9m0xhtEo0Hr3ZO3YeeL7qu_ca7vj7zfLQMsjJz0ekThAICwM_rwMty-FvMVljJRxYi1IQS0lNqXUv7Fdr0jC9tcqwWcOMwP8-w"
						title="Nativa Resort"
						descuento={20}
					/>
					<CardHotel
						link="https://cf.bstatic.com/images/hotel/max1024x768/254/254480509.jpg"
						title="Croc's Resort & Casino"
						descuento={10}
					/>

					<CardHotel
						link="https://www.anywhere.com/img-a/hotel/arenas-del-mar-nature-resort-manuel-antonio-costa-rica/Arenas-del-Mar-A-5-jpg"
						title="Arenas del Mar"
						descuento={15}
					/>
					<CardHotel
						link="https://www.anywhere.com/img-a/hotel/arenas-del-mar-nature-resort-manuel-antonio-costa-rica/Arenas-del-Mar-A-5-jpg"
						title="Arenas del Mar"
						descuento={15}
					/>
				</div>
			</div>
			<div className="row ml-2">
				<div className="list-group list-group-horizontal text-nowrap overflow-auto">
					<CardHotel
						link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmV4SyZpjhYeEV05a8kZFyVZ-UP9tcYlREdw&usqp=CAU"
						title="Hotel DoubleTree by Hilton"
						descuento={35}
					/>
					<CardHotel
						link="https://lh3.googleusercontent.com/proxy/G5nLeQv4W2ZzHyVmXzIozGtLkUdqRaBRcw43EjowyNx_ZQZbdD0XV9m0xhtEo0Hr3ZO3YeeL7qu_ca7vj7zfLQMsjJz0ekThAICwM_rwMty-FvMVljJRxYi1IQS0lNqXUv7Fdr0jC9tcqwWcOMwP8-w"
						title="Nativa Resort"
						descuento={20}
					/>
					<CardHotel
						link="https://cf.bstatic.com/images/hotel/max1024x768/254/254480509.jpg"
						title="Croc's Resort & Casino"
						descuento={10}
					/>

					<CardHotel
						link="https://www.anywhere.com/img-a/hotel/arenas-del-mar-nature-resort-manuel-antonio-costa-rica/Arenas-del-Mar-A-5-jpg"
						title="Arenas del Mar"
						descuento={15}
					/>
					<CardHotel
						link="https://www.anywhere.com/img-a/hotel/arenas-del-mar-nature-resort-manuel-antonio-costa-rica/Arenas-del-Mar-A-5-jpg"
						title="Arenas del Mar"
						descuento={15}
					/>
				</div>
			</div>
		</div>
	);
};
