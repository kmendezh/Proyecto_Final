import React from "react";
import CardHotel from "../component/cardhotel";
// import "../../styles/home.css";
import Rating from "../component/rating";

export const Hoteles = () => {
	return (
		<div className="p-4">
			<div>
				<div className="mt-4">
					<h2>San José</h2>
				</div>
				<div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-1 pt-2">
					<CardHotel
						link="https://media.radissonhotelsamericas.com/image/park-inn-by-radisson-san-jose-costa-rica/exteriorview/20828-141062-f63771406_3xl.jpg?impolicy=CustomCrop&cwidth=670&cheight=603"
						title="Park Inn by Radisson"
						descripcion="A poca distancia del bullicioso centro de la ciudad, el Park Inn by Radisson San Jose, Costa Rica es una opción ideal tanto para viajeros de negocios como de placer."
						descuento1={5}
						descuento2={30}
						desprecio="de habitación por noche "
						simbolo="$"
						moneda={85}
					/>
					<CardHotel
						link="https://scontent.fsjo5-1.fna.fbcdn.net/v/t1.6435-9/175853343_3945757492129541_1098230419262908279_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=kMx3QTVULxIAX9dnMU1&_nc_ht=scontent.fsjo5-1.fna&oh=cf5daf2f73a1cef4c173cf62bcc8b0a2&oe=60B35B30"
						title="Restaurante Ram Luna"
						descripcion="En 1967, un rural y viejo mirador en los frescos cerros de Aserrí, a 1.700 metros sobre el nivel del mar y con impresionante vista a la ciudad capital San José."
						descuento1={5}
						descuento2={30}
						desprecio="del almuerzo "
						simbolo="₡"
						moneda={4000}
					/>
					<CardHotel
						link="https://cf.bstatic.com/xdata/images/hotel/square600/236336608.webp?k=05b29b5a28b0f4d0bc8737999cad41f8fe9b81f9875d206dea3917b85c8e1896&o="
						title="Crowne Plaza Corobici"
						descripcion="Este lujoso hotel de conferencias situado en el centro de la ciudad se encuentra al lado del Parque Metropolitano La Sabana y a 4 km del Museo Nacional de Costa Rica."
						descuento1={5}
						descuento2={30}
						desprecio="de habitación por noche "
						simbolo="$"
						moneda={85}
					/>
					<CardHotel
						link="https://scontent.fsjo5-1.fna.fbcdn.net/v/t1.6435-9/49673929_2415994968428274_7563808308746780672_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=e3f864&_nc_ohc=8ejhYtqipycAX_5BAZj&_nc_ht=scontent.fsjo5-1.fna&oh=8125bb5bcd52a49b6ade2cb40b5602b4&oe=60B31672"
						title="Hotel Barmoral"
						descripcion="El Hotel Balmoral fundado en la década de los 50¨s se destaca por su estilo Art Deco y por ser un hotel muy céntrico con facilidad de desplazarse a museos, centro de San José, etc. Además se ubica en el Bulevart de Avenida Central."
						descuento1={5}
						descuento2={30}
						desprecio="de habitación por noche "
						simbolo="$"
						moneda={85}
					/>
					<CardHotel
						link="https://scontent.fsjo5-1.fna.fbcdn.net/v/t1.6435-9/124577962_3609211442472747_5076160862429654282_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=1Z4rM6Uil6IAX9xseYf&_nc_ht=scontent.fsjo5-1.fna&oh=464a9213b4fba69c405c392271977b03&oe=60B2DB03"
						title="Picanha Grill"
						descripcion="Más de una década ha pasado desde que dejamos el Sur de Brasil. El destino nos trajo a este hermoso país del cual nos enamoramos.
                        Churrascaría Picanha Grill nace del sueño de compartir lo mejor de nuestra cultura Gaucha."
						descuento1={5}
						descuento2={30}
						desprecio="del almuerzo "
						simbolo="$"
						moneda={28}
					/>
					<CardHotel
						link="https://www.govisitcostarica.co.cr/images/photos/mob-grano-de-oro-hotel.jpg"
						title="Hotel Grano de Oro"
						descripcion="El Hotel Grano de Oro fue iniciado por una pareja canadiense que frecuentaba Costa Rica de vacaciones. Les encantaba la belleza natural del país y la gente, y en particular la ciudad metropolitana de San José."
						descuento1={5}
						descuento2={30}
						desprecio="del almuerzo "
						simbolo="$"
						moneda={28}
					/>
					<CardHotel
						link="https://www.autenticohotel.com/wp-content/uploads/2018/08/REstaurante-mastico-Hotel-Autentico-Costa-Rica.jpg"
						title="Restaurante Mastico"
						descripcion="Delicias artesanales que alegran tu día al instante. Ya sea de chocolate, vainilla o canela, utilizamos los mejores ingredientes para producir estos manjares para el deleite de tu boca."
						descuento1={5}
						descuento2={30}
						desprecio="del almuerzo "
						simbolo="$"
						moneda={15}
					/>
				</div>
			</div>
			<div>
				<div className="mt-4">
					<h2>Alajuela</h2>
				</div>
				<div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-1 pt-2">
					<CardHotel
						link="https://cf.bstatic.com/images/hotel/max1280x900/261/261133695.jpg"
						title="Hampton Inn & Suites"
						descripcion="El Hampton Inn ofrece habitaciones modernas a sólo 1,5 km del aeropuerto internacional de San José. Cuenta con una gran piscina y un gimnasio y servicio gratuito de traslado al aeropuerto."
						descuento1={5}
						descuento2={30}
						desprecio="de habitación por noche "
						simbolo="$"
						moneda={85}
					/>
					<CardHotel
						link="https://cf.bstatic.com/images/hotel/max1280x900/234/234145937.jpg"
						title="Holiday Inn Express"
						descripcion="Este moderno hotel, situado a sólo 1,5 km del aeropuerto de San José, ofrece un servicio gratuito de enlace con el aeropuerto las 24 horas, además de una piscina al aire libre y un gimnasio."
						descuento1={5}
						descuento2={30}
						desprecio="de habitación por noche "
						simbolo="$"
						moneda={85}
					/>
					<CardHotel
						link="https://cf.bstatic.com/images/hotel/max1280x900/251/251653319.jpg"
						title="Courtyard by Marriott"
						descripcion="Este hotel es ideal para viajeros, ya que ofrece un servicio gratuito de enlace con el aeropuerto internacional Juan Santamaría. Hay varios sitios para comer en las inmediaciones."
						descuento1={5}
						descuento2={30}
						desprecio="de habitación por noche "
						simbolo="$"
						moneda={85}
					/>
					<CardHotel
						link="https://cf.bstatic.com/images/hotel/max1280x900/168/16831736.jpg"
						title="Xandari Resort & Spa"
						descripcion="Ubicado en medio de un bosque tropical, ofrece excelentes vistas a la montaña, una zona de spa, clases de yoga, piscinas al aire libre y bañeras de hidromasaje. Se encuentra a 4 km de senderos naturales."
						descuento1={5}
						descuento2={30}
						desprecio="de habitación por noche "
						simbolo="$"
						moneda={85}
					/>
					<CardHotel
						link="https://cf.bstatic.com/images/hotel/max1280x900/172/172313624.jpg"
						title="Lost Iguana Resort and Spa"
						descripcion="El Lost Iguana Resort and Spa cuenta con piscina al aire libre, gimnasio y exuberantes jardines con un laberinto."
						descuento1={5}
						descuento2={30}
						desprecio="de habitación por noche "
						simbolo="$"
						moneda={85}
					/>
					<CardHotel
						link="https://cf.bstatic.com/images/hotel/max1280x900/427/42748733.jpg"
						title="Volcano Lodge"
						descripcion="El Volcano Lodge, Hotel & Thermal Experience está ubicado entre jardines tropicales exuberantes, a los pies del volcán Arenal de Costa Rica, y ofrece piscina al aire libre."
						descuento1={5}
						descuento2={30}
						desprecio="de habitación por noche "
						simbolo="$"
						moneda={85}
					/>
					<CardHotel
						link="https://cf.bstatic.com/images/hotel/max1024x768/204/204733619.jpg"
						title="Tabacón Thermal Resort & Spa"
						descripcion="El Tabacón Thermal Resort & Spa, situado a 15 minutos en coche del parque nacional Volcán Arenal."
						descuento1={5}
						descuento2={30}
						desprecio="de habitación por noche "
						simbolo="$"
						moneda={85}
					/>
				</div>
			</div>
			<div>
				<div className="mt-4">
					<h2>Cartago</h2>
				</div>
				<div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-1 pt-2">
					<CardHotel
						link="https://scontent.fsjo5-1.fna.fbcdn.net/v/t1.6435-9/178785014_3294568683978919_2391418844926326354_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=s40YIPXD0zIAX8AB0lQ&_nc_ht=scontent.fsjo5-1.fna&oh=5f8a7b455fff96fc2fd4d01b940d5fcb&oe=60B081BF"
						title="Bocadito Del Cielo"
						descripcion="En el marco de un exhuberante paisaje con senderos naturales rodeados de hermosos jardines y bosques celosamente protegidos, emerge el Restaurante, Mirador y Cafetería Bocadito del Cielo."
						descuento1={5}
						descuento2={30}
						desprecio="del almuerzo "
						simbolo="₡"
						moneda={5000}
					/>
					<CardHotel
						link="https://media-cdn.tripadvisor.com/media/photo-p/12/22/0f/e1/photo0jpg.jpg"
						title="Pizzería a la leña Il Giardino"
						descripcion="Somos especialistas en pizza a la leña, nuestro concepto es mezclar la belleza natural con nuestra sabrosa comida, ofreciendo un momento ameno acompañado de tu familia y amigos."
						descuento1={5}
						descuento2={30}
						desprecio="del almuerzo "
						simbolo="₡"
						moneda={10000}
					/>
					<CardHotel
						link="https://scontent.fsjo5-1.fna.fbcdn.net/v/t1.6435-9/157570981_4271287302893331_2331460002553040888_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=9267fe&_nc_ohc=8xhvekNlfaoAX_8zKiP&_nc_ht=scontent.fsjo5-1.fna&oh=4002de4b55cba79bd911f7d2ed4a6b46&oe=60B0DC3D"
						title="Mi Tierra"
						descripcion="Fue inaugurado en el 2002 por el Señor Carlos Calderón Solano, pensando en darle a la provincia de Cartago un nuevo concepto de comida típica costarricense."
						descuento1={5}
						descuento2={30}
						desprecio="del almuerzo "
						simbolo="₡"
						moneda={5000}
					/>
					<CardHotel
						link="https://scontent.fsjo5-1.fna.fbcdn.net/v/t1.6435-9/179034788_2862543923970583_2156953906051907026_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=DqrwRfTRGeQAX_F270n&_nc_ht=scontent.fsjo5-1.fna&oh=6b2f322313eeb0eb9b21b4573215ea56&oe=60B17DEF"
						title="La Casona Mexicana & Grill"
						descripcion="Restaurante Mexicano & Parrilla en Cartago ofreciéndole la auténtica gastronomía mexicana como los famosos tacos al Pastor, y los mejores cortes de carne. y más!!!"
						descuento1={5}
						descuento2={30}
						desprecio="del almuerzo "
						simbolo="₡"
						moneda={5000}
					/>
					<CardHotel
						link="https://cf.bstatic.com/images/hotel/max300/224/224219465.jpg"
						title="Bella Vista Ranch Ecolodge"
						descripcion="El Bella Vista Ranch Adventures Ecolodge se encuentra en Turrialba y dispone de jardín, terraza y salón compartido. También cuenta con mostrador de información turística y restaurante."
						descuento1={5}
						descuento2={30}
						desprecio="de habitación por noche "
						simbolo="$"
						moneda={85}
					/>
					<CardHotel
						link="https://lh6.googleusercontent.com/proxy/ex_bYP_qMY4aHoQO7f40A_6THXwFyPppyK3asqyptp91tvQus_uGEmMlv9p1DbJvShAbTzTRlKu6W62nKFC5mSV4dD66j-Rjls1LcPdht5eOFIG0iii3dQw8IaR_qzkkMQx6dRt7S6ztvK3J9FQ5scuQyR-PkA=w408-h306-k-no"
						title="Hotel Villa Florencia"
						descripcion="Hotel Villa Florencia es una magnífica elección para los viajeros que visiten Turrialba, ya que ofrece un ambiente romántico, además de numerosos servicios diseñados para mejorar tu estancia."
						descuento1={5}
						descuento2={30}
						desprecio="de habitación por noche "
						simbolo="$"
						moneda={85}
					/>
					<CardHotel
						link="https://cf.bstatic.com/images/hotel/max1024x768/534/53427294.jpg"
						title="Hotel Casa Turire"
						descripcion="Descubre por qué tantos viajeros ven Hotel Casa Turire como el hotel ideal cuando visitan Turrialba. Además de aportar la combinación ideal de calidad, comodidad y ubicación."
						descuento1={5}
						descuento2={30}
						desprecio="de habitación por noche "
						simbolo="$"
						moneda={85}
					/>
				</div>
			</div>
			<div>
				<div className="mt-4">
					<h2>Heredia</h2>
				</div>
				<div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-1 pt-2">
					<CardHotel
						link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmV4SyZpjhYeEV05a8kZFyVZ-UP9tcYlREdw&usqp=CAU"
						title="Hotel DoubleTree by Hilton"
						descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet mauris ex, ut rutrum urna
					pulvinar in. Nunc convallis at turpis in convallis. Morbi molestie euismod odio non pretium. Fusce."
						descuento1={5}
						descuento2={30}
					/>
					<CardHotel
						link="https://cf.bstatic.com/images/hotel/max1024x768/254/254480509.jpg"
						title="Croc's Resort & Casino"
						descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet mauris ex, ut rutrum urna
					pulvinar in. Nunc convallis at turpis in convallis. Morbi molestie euismod odio non pretium. Fusce."
						descuento1={5}
						descuento2={30}
					/>
					<CardHotel
						link="https://www.anywhere.com/img-a/hotel/arenas-del-mar-nature-resort-manuel-antonio-costa-rica/Arenas-del-Mar-A-5-jpg"
						title="Arenas del Mar"
						descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet mauris ex, ut rutrum urna
					pulvinar in. Nunc convallis at turpis in convallis. Morbi molestie euismod odio non pretium. Fusce."
						descuento1={5}
						descuento2={30}
					/>
					<CardHotel
						link="https://www.anywhere.com/img-a/hotel/arenas-del-mar-nature-resort-manuel-antonio-costa-rica/Arenas-del-Mar-A-5-jpg"
						title="Arenas del Mar"
						descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet mauris ex, ut rutrum urna
					pulvinar in. Nunc convallis at turpis in convallis. Morbi molestie euismod odio non pretium. Fusce."
						descuento1={5}
						descuento2={30}
					/>
					<CardHotel
						link="https://www.anywhere.com/img-a/hotel/arenas-del-mar-nature-resort-manuel-antonio-costa-rica/Arenas-del-Mar-A-5-jpg"
						title="Arenas del Mar"
						descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet mauris ex, ut rutrum urna
					pulvinar in. Nunc convallis at turpis in convallis. Morbi molestie euismod odio non pretium. Fusce."
						descuento1={5}
						descuento2={30}
					/>
					<CardHotel
						link="https://www.anywhere.com/img-a/hotel/arenas-del-mar-nature-resort-manuel-antonio-costa-rica/Arenas-del-Mar-A-5-jpg"
						title="Arenas del Mar"
						descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet mauris ex, ut rutrum urna
					pulvinar in. Nunc convallis at turpis in convallis. Morbi molestie euismod odio non pretium. Fusce."
						descuento1={5}
						descuento2={30}
					/>
					<CardHotel
						link="https://www.anywhere.com/img-a/hotel/arenas-del-mar-nature-resort-manuel-antonio-costa-rica/Arenas-del-Mar-A-5-jpg"
						title="Arenas del Mar"
						descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet mauris ex, ut rutrum urna
					pulvinar in. Nunc convallis at turpis in convallis. Morbi molestie euismod odio non pretium. Fusce."
						descuento1={5}
						descuento2={30}
					/>
				</div>
			</div>
			<div>
				<div className="mt-4">
					<h2>Guanacaste</h2>
				</div>
				<div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-1 pt-2">
					<CardHotel
						link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmV4SyZpjhYeEV05a8kZFyVZ-UP9tcYlREdw&usqp=CAU"
						title="Hotel DoubleTree by Hilton"
						descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet mauris ex, ut rutrum urna
					pulvinar in. Nunc convallis at turpis in convallis. Morbi molestie euismod odio non pretium. Fusce."
						descuento1={5}
						descuento2={30}
					/>
					<CardHotel
						link="https://cf.bstatic.com/images/hotel/max1024x768/254/254480509.jpg"
						title="Croc's Resort & Casino"
						descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet mauris ex, ut rutrum urna
					pulvinar in. Nunc convallis at turpis in convallis. Morbi molestie euismod odio non pretium. Fusce."
						descuento1={5}
						descuento2={30}
					/>
					<CardHotel
						link="https://www.anywhere.com/img-a/hotel/arenas-del-mar-nature-resort-manuel-antonio-costa-rica/Arenas-del-Mar-A-5-jpg"
						title="Arenas del Mar"
						descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet mauris ex, ut rutrum urna
					pulvinar in. Nunc convallis at turpis in convallis. Morbi molestie euismod odio non pretium. Fusce."
						descuento1={5}
						descuento2={30}
					/>
					<CardHotel
						link="https://www.anywhere.com/img-a/hotel/arenas-del-mar-nature-resort-manuel-antonio-costa-rica/Arenas-del-Mar-A-5-jpg"
						title="Arenas del Mar"
						descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet mauris ex, ut rutrum urna
					pulvinar in. Nunc convallis at turpis in convallis. Morbi molestie euismod odio non pretium. Fusce."
						descuento1={5}
						descuento2={30}
					/>
					<CardHotel
						link="https://www.anywhere.com/img-a/hotel/arenas-del-mar-nature-resort-manuel-antonio-costa-rica/Arenas-del-Mar-A-5-jpg"
						title="Arenas del Mar"
						descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet mauris ex, ut rutrum urna
					pulvinar in. Nunc convallis at turpis in convallis. Morbi molestie euismod odio non pretium. Fusce."
						descuento1={5}
						descuento2={30}
					/>
					<CardHotel
						link="https://www.anywhere.com/img-a/hotel/arenas-del-mar-nature-resort-manuel-antonio-costa-rica/Arenas-del-Mar-A-5-jpg"
						title="Arenas del Mar"
						descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet mauris ex, ut rutrum urna
					pulvinar in. Nunc convallis at turpis in convallis. Morbi molestie euismod odio non pretium. Fusce."
						descuento1={5}
						descuento2={30}
					/>
					<CardHotel
						link="https://www.anywhere.com/img-a/hotel/arenas-del-mar-nature-resort-manuel-antonio-costa-rica/Arenas-del-Mar-A-5-jpg"
						title="Arenas del Mar"
						descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet mauris ex, ut rutrum urna
					pulvinar in. Nunc convallis at turpis in convallis. Morbi molestie euismod odio non pretium. Fusce."
						descuento1={5}
						descuento2={30}
					/>
				</div>
			</div>
			<div>
				<div className="mt-4">
					<h2>Puntarenas</h2>
				</div>
				<div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-1 pt-2">
					<CardHotel
						link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmV4SyZpjhYeEV05a8kZFyVZ-UP9tcYlREdw&usqp=CAU"
						title="Hotel DoubleTree by Hilton"
						descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet mauris ex, ut rutrum urna
					pulvinar in. Nunc convallis at turpis in convallis. Morbi molestie euismod odio non pretium. Fusce."
						descuento1={5}
						descuento2={30}
					/>
					<CardHotel
						link="https://cf.bstatic.com/images/hotel/max1024x768/254/254480509.jpg"
						title="Croc's Resort & Casino"
						descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet mauris ex, ut rutrum urna
					pulvinar in. Nunc convallis at turpis in convallis. Morbi molestie euismod odio non pretium. Fusce."
						descuento1={5}
						descuento2={30}
					/>
					<CardHotel
						link="https://www.anywhere.com/img-a/hotel/arenas-del-mar-nature-resort-manuel-antonio-costa-rica/Arenas-del-Mar-A-5-jpg"
						title="Arenas del Mar"
						descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet mauris ex, ut rutrum urna
					pulvinar in. Nunc convallis at turpis in convallis. Morbi molestie euismod odio non pretium. Fusce."
						descuento1={5}
						descuento2={30}
					/>
					<CardHotel
						link="https://www.anywhere.com/img-a/hotel/arenas-del-mar-nature-resort-manuel-antonio-costa-rica/Arenas-del-Mar-A-5-jpg"
						title="Arenas del Mar"
						descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet mauris ex, ut rutrum urna
					pulvinar in. Nunc convallis at turpis in convallis. Morbi molestie euismod odio non pretium. Fusce."
						descuento1={5}
						descuento2={30}
					/>
					<CardHotel
						link="https://www.anywhere.com/img-a/hotel/arenas-del-mar-nature-resort-manuel-antonio-costa-rica/Arenas-del-Mar-A-5-jpg"
						title="Arenas del Mar"
						descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet mauris ex, ut rutrum urna
					pulvinar in. Nunc convallis at turpis in convallis. Morbi molestie euismod odio non pretium. Fusce."
						descuento1={5}
						descuento2={30}
					/>
					<CardHotel
						link="https://www.anywhere.com/img-a/hotel/arenas-del-mar-nature-resort-manuel-antonio-costa-rica/Arenas-del-Mar-A-5-jpg"
						title="Arenas del Mar"
						descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet mauris ex, ut rutrum urna
					pulvinar in. Nunc convallis at turpis in convallis. Morbi molestie euismod odio non pretium. Fusce."
						descuento1={5}
						descuento2={30}
					/>
					<CardHotel
						link="https://www.anywhere.com/img-a/hotel/arenas-del-mar-nature-resort-manuel-antonio-costa-rica/Arenas-del-Mar-A-5-jpg"
						title="Arenas del Mar"
						descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet mauris ex, ut rutrum urna
					pulvinar in. Nunc convallis at turpis in convallis. Morbi molestie euismod odio non pretium. Fusce."
						descuento1={5}
						descuento2={30}
					/>
				</div>
			</div>
			<div>
				<div className="mt-4">
					<h2>Limón</h2>
				</div>
				<div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-1 pt-2">
					<CardHotel
						link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmV4SyZpjhYeEV05a8kZFyVZ-UP9tcYlREdw&usqp=CAU"
						title="Hotel DoubleTree by Hilton"
						descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet mauris ex, ut rutrum urna
					pulvinar in. Nunc convallis at turpis in convallis. Morbi molestie euismod odio non pretium. Fusce."
						descuento1={5}
						descuento2={30}
					/>
					<CardHotel
						link="https://cf.bstatic.com/images/hotel/max1024x768/254/254480509.jpg"
						title="Croc's Resort & Casino"
						descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet mauris ex, ut rutrum urna
					pulvinar in. Nunc convallis at turpis in convallis. Morbi molestie euismod odio non pretium. Fusce."
						descuento1={5}
						descuento2={30}
					/>
					<CardHotel
						link="https://www.anywhere.com/img-a/hotel/arenas-del-mar-nature-resort-manuel-antonio-costa-rica/Arenas-del-Mar-A-5-jpg"
						title="Arenas del Mar"
						descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet mauris ex, ut rutrum urna
					pulvinar in. Nunc convallis at turpis in convallis. Morbi molestie euismod odio non pretium. Fusce."
						descuento1={5}
						descuento2={30}
					/>
					<CardHotel
						link="https://www.anywhere.com/img-a/hotel/arenas-del-mar-nature-resort-manuel-antonio-costa-rica/Arenas-del-Mar-A-5-jpg"
						title="Arenas del Mar"
						descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet mauris ex, ut rutrum urna
					pulvinar in. Nunc convallis at turpis in convallis. Morbi molestie euismod odio non pretium. Fusce."
						descuento1={5}
						descuento2={30}
					/>
					<CardHotel
						link="https://www.anywhere.com/img-a/hotel/arenas-del-mar-nature-resort-manuel-antonio-costa-rica/Arenas-del-Mar-A-5-jpg"
						title="Arenas del Mar"
						descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet mauris ex, ut rutrum urna
					pulvinar in. Nunc convallis at turpis in convallis. Morbi molestie euismod odio non pretium. Fusce."
						descuento1={5}
						descuento2={30}
					/>
					<CardHotel
						link="https://www.anywhere.com/img-a/hotel/arenas-del-mar-nature-resort-manuel-antonio-costa-rica/Arenas-del-Mar-A-5-jpg"
						title="Arenas del Mar"
						descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet mauris ex, ut rutrum urna
					pulvinar in. Nunc convallis at turpis in convallis. Morbi molestie euismod odio non pretium. Fusce."
						descuento1={5}
						descuento2={30}
					/>
					<CardHotel
						link="https://www.anywhere.com/img-a/hotel/arenas-del-mar-nature-resort-manuel-antonio-costa-rica/Arenas-del-Mar-A-5-jpg"
						title="Arenas del Mar"
						descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet mauris ex, ut rutrum urna
					pulvinar in. Nunc convallis at turpis in convallis. Morbi molestie euismod odio non pretium. Fusce."
						descuento1={5}
						descuento2={30}
					/>
				</div>
			</div>
		</div>
	);
};
