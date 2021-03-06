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
						descripcion="El Hampton Inn ofrece habitaciones modernas a sólo 1,5 km del aeropuerto internacional de San José. Cuenta con una gran piscina y un gimnasio, así como conexión Wi-Fi de cortesía y servicio gratuito de traslado al aeropuerto."
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
						descripcion="El Xandari Resort, ubicado en medio de un bosque tropical, ofrece excelentes vistas a la montaña, una zona de spa, clases de yoga, piscinas al aire libre y bañeras de hidromasaje. Se encuentra a 4 km de senderos naturales."
						descuento1={5}
						descuento2={30}
						desprecio="de habitación por noche "
						simbolo="$"
						moneda={85}
					/>
					<CardHotel
						link="https://cf.bstatic.com/images/hotel/max1280x900/172/172313624.jpg"
						title="Lost Iguana Resort and Spa"
						descripcion="El Lost Iguana Resort and Spa cuenta con piscina al aire libre, gimnasio y exuberantes jardines con un laberinto. Las habitaciones tienen vistas al volcán Arenal, situado a solo 25 minutos en coche."
						descuento1={5}
						descuento2={30}
						desprecio="de habitación por noche "
						simbolo="$"
						moneda={85}
					/>
					<CardHotel
						link="https://cf.bstatic.com/images/hotel/max1280x900/427/42748733.jpg"
						title="Volcano Lodge"
						descripcion="El Volcano Lodge, Hotel & Thermal Experience está ubicado entre jardines tropicales exuberantes, a los pies del volcán Arenal de Costa Rica, y ofrece piscina al aire libre y una zona con WiFi gratuita. Las habitaciones tienen aire acondicionado y terraza."
						descuento1={5}
						descuento2={30}
						desprecio="de habitación por noche "
						simbolo="$"
						moneda={85}
					/>
					<CardHotel
						link="https://cf.bstatic.com/images/hotel/max1024x768/204/204733619.jpg"
						title="Tabacón Thermal Resort & Spa"
						descripcion="El Tabacón Thermal Resort & Spa, situado a 15 minutos en coche del parque nacional Volcán Arenal, ofrece baños termales, sauna, servicio de masajes, tratamientos spa de lujo y 5 piscinas."
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
						link="https://www.bing.com/th?id=A%252fvhxeHZ0q8Cpxg480x360&w=205&h=180&c=8&rs=1&pid=3.1&rm=2"
						title="Cariari Bed & Breakfast"
						descripcion="Para aquellos que visiten Heredia, Cariari Bed & Breakfast es una magnífica 
                        elección para descansar. Conocido por su ambiente romántico y su proximidad a 
                        fantásticos restaurantes."
						descuento1={5}
						descuento2={30}
						desprecio="de habitación por noche "
						simbolo="$"
						moneda={45}
					/>
					<CardHotel
						link="https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/79188373.jpg?k=706cd00840e7524d6b8f66a19e04bfca8d3f4c044dc4c563545b5f8bae0915c1&o="
						title="Casa Familiar La Tortuga"
						descripcion="Las habitaciones de Casa Familiar La Tortuga incluyen televisor de pantalla plana para una comodidad mucho mayor,
                         y los huéspedes pueden permanecer conectados con wifi gratuito."
						descuento1={5}
						descuento2={30}
						desprecio="de habitación por noche "
						simbolo="$"
						moneda={45}
					/>
					<CardHotel
						link="https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/35319763.jpg?k=39cdb4b7692c9f8282f1cb4604532206e818707cd7aae3adc3f1bc1732a250ba&o="
						title="Casa Tropical"
						descripcion="La Casa Tropical se encuentra en 1ª línea de playa, dentro de la 
                        urbanización Costambar y a 5 minutos en coche del centro de Puerto Plata, y 
                        alberga una piscina exterior."
						descuento1={5}
						descuento2={30}
						desprecio="de habitación por noche "
						simbolo="$"
						moneda={45}
					/>
					<CardHotel
						link="https://cf.bstatic.com/xdata/images/hotel/square200/289525820.jpg?k=307ac5dc537457dd58f60b7f27ab1690fca0ae103ef62237af748163030471a6&o="
						title="Cibeles Resort"
						descripcion="El Hotel Cibeles Resort se encuentra en Heredia, a 2,1 km del Britt Coffee Tour, y ofrece alojamiento con piscina al aire libre, aparcamiento privado gratuito y jardín."
						descuento1={5}
						descuento2={30}
						desprecio="de habitación por noche "
						simbolo="$"
						moneda={45}
					/>
					<CardHotel
						link="https://aff.bstatic.com/images/hotel/max500/924/92424435.jpg"
						title="Cypress Hills"
						descripcion="El establecimiento Vistas del Tirol admite animales de compañía y se encuentra en Heredia. 
                        Facilita aparcamiento privado gratuito y WiFi gratuita en todo el recinto. Las habitaciones tienen TV de pantalla plana.."
						descuento1={5}
						descuento2={30}
						desprecio="de habiación por noche "
						simbolo="$"
						moneda={45}
					/>
					<CardHotel
						link="https://www.gavilanlodge.com/wp-content/uploads/2020/11/Hotel-Gavilan-Lodge-Sarapiqui-4.jpg"
						title="Gavilan Sarapiqui River Lodge"
						descripcion="El Gran Gavilán del Sarapiquí Lodge se encuentra en Sarapiquí y ofrece WiFi gratuita,
                        restaurante, salón compartido y jardín. El lodge sirve un desayuno continental o vegano."
						descuento1={5}
						descuento2={30}
						desprecio="de habiación por noche "
						simbolo="$"
						moneda={45}
					/>
					<CardHotel
						link="https://cf.bstatic.com/xdata/images/hotel/square200/117184366.jpg?k=fa9446123c01d8a0fbe8a5499b6b3686041e02be6e974c7b47d360b8a4f6f60f&o="
						title="Finca Rosa Blanca"
						descripcion="La Finca Rosa Blanca Coffee Farm and Inn se encuentra en Heredia, a 2,6 km del estadio Carlos Alvarado, y ofrece alojamiento con restaurante, aparcamiento privado gratuito, piscina al aire libre y..."
						descuento1={5}
						descuento2={30}
						desprecio="de habitación por noche "
						simbolo="$"
						moneda={45}
					/>
				</div>
			</div>
			<div>
				<div className="mt-4">
					<h2>Guanacaste</h2>
				</div>
				<div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-1 pt-2">
					<CardHotel
						link="https://www.atrapalo.com/hoteles/picture/l/1746/6/5/376864047.jpg"
						title="Hotel Best Western"
						descripcion="Best Western Camino a Tamarindo es una pequeña propiedad ubicada en la provincia de Guanacaste, rodeada por la belleza natural de Costa Rica. Su atención personalizada, funcionales instalaciones y amenidades de cortesí"
						descuento1={5}
						descuento2={30}
						desprecio="de habitación por noche "
						simbolo="$"
						moneda={35}
					/>
					<CardHotel
						link="https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/51168180.jpg?k=3c1e081a7bf33b62b6708d1e038e6154df1ae4372e41a2f9dab8f808c3893c55&o="
						title="Hotel Bosque del Mar"
						descripcion="En Bosque del Mar estamos comprometidos con usted para hacer de estas las mejores vacaciones. ¡Tome nota!"
						descuento1={5}
						descuento2={30}
						desprecio="de habitación por noche "
						simbolo="$"
						moneda={35}
					/>
					<CardHotel
						link="https://media-cdn.tripadvisor.com/media/oyster/730/0a/59/6b/86/quiet-pool--v10174012.jpg"
						title="Hotel Casa Conde"
						descripcion=" Este Resort cuenta con dos piscinas, dos jacuzzis, dos bares húmedos, un Sports Bar, dos restaurantes, servicios de spa"
						descuento1={5}
						descuento2={30}
						desprecio="de habitación por noche "
						simbolo="$"
						moneda={35}
					/>
					<CardHotel
						link="https://exp.cdn-hotels.com/hotels/13000000/12540000/12534600/12534581/34a248db_z.jpg?impolicy=fcrop&w=1000&h=666&q=medium"
						title="Condovac La Costa"
						descripcion="Condovac la Costa tiene habitaciones con modalidad todo incluido. Estas tarifas son más altas porque la comida y las bebidas que se consumen en el establecimiento están incluidas "
						descuento1={5}
						descuento2={30}
						desprecio="de habitación por noche "
						simbolo="$"
						moneda={40}
					/>
					<CardHotel
						link="https://www.hiltonhotels.com/assets/img/Hotel%20Images/Hilton%20Garden%20Inn/S/SJOLAGI/SJOLAGI_gallery_poolout2.jpg"
						title="Hilton Garden Inn"
						descripcion="Hilton Garden Inn Liberia Airport es un lugar excelente para comenzar y terminar sus vacaciones o su viaje de negocios en Costa Rica. "
						descuento1={5}
						descuento2={30}
						desprecio="de habitación por noche "
						simbolo="$"
						moneda={40}
					/>
					<CardHotel
						link="https://media-cdn.tripadvisor.com/media/photo-w/15/76/c5/ae/photo2jpg.jpg"
						title="Hotel Restaurant Las Espuelas"
						descripcion="Vea por qué tantos viajeros hacen de Las Espuelas Hotel su elección al visitar Liberia."
						descuento1={5}
						descuento2={30}
						desprecio="de habitación por noche "
						simbolo="$"
						moneda={40}
					/>
					<CardHotel
						link="https://www.tamarindodiria.com/wp-content/uploads/opt-ADULTS-ONLY-AREA.jpg"
						title="Hotel Tamarindo Diria"
						descripcion="El alojamiento perfecto para familias y parejas que buscan un ambiente sereno y relajado con vista a la playa"
						descuento1={5}
						descuento2={30}
						desprecio="de habitación por noche "
						simbolo="$"
						moneda={40}
					/>
				</div>
			</div>
			<div>
				<div className="mt-4">
					<h2>Puntarenas</h2>
				</div>
				<div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-1 pt-2">
					<CardHotel
						link="https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/85272421.jpg?k=f142f905bc1bb9645e8e8b4f966ab96add571a8720e47f903f7ac4a7a50664f1&o="
						title="Aldea La Casa De Los Mariscos"
						descripcion="La Aldea Casa de los Mariscos cuenta con WiFi gratuita y aparcamiento privado gratuito y se encuentra en Puntarenas, a 46 km de Jacó."
						descuento1={5}
						descuento2={30}
						desprecio="de habitación por noche "
						simbolo="$"
						moneda={40}
					/>
					<CardHotel
						link="https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/232316886.jpg?k=b999857827831301fbf3fe0ef40422c35bea93442ac6452723a57e4e616ff111&o="
						title="Castillo Resort"
						descripcion="Este establecimiento informa que actualmente aplica medidas de limpieza adicional y seguridad de los huéspedes."
						descuento1={5}
						descuento2={30}
						desprecio="de habitación por noche "
						simbolo="$"
						moneda={40}
					/>
					<CardHotel
						link="https://cdn.galaxy.tf/thumb/sizeW372/unit-media/tc-default/uploads/images/room_photo/001/619/040/piscina-condo-standard.jpg"
						title="Hotel Puerto Azul Boutique"
						descripcion="Una decoración náutica relajante, muebles elegantes y modernos y vistas al océano o a los manglares se unen para crear un oasis relajante en Puntarenas"
						descuento1={5}
						descuento2={30}
						desprecio="de habitación por noche "
						simbolo="$"
						moneda={40}
					/>
					<CardHotel
						link="https://exp.cdn-hotels.com/hotels/18000000/17770000/17763500/17763483/b78107c5_z.jpg?impolicy=fcrop&w=1000&h=666&q=medium"
						title="Hotel Las Brisas"
						descripcion="Hotel de 3 estrellas en Puntarenas con piscina al aire libre y restaurante"
						descuento1={5}
						descuento2={30}
						desprecio="de habitación por noche "
						simbolo="$"
						moneda={35}
					/>
					<CardHotel
						link="https://cf.bstatic.com/images/hotel/max1024x768/229/229643545.jpg?hp=1"
						title="Hotel Restaurant Puntarenas Backpackers"
						descripcion="El Puntarenas Backpackers se encuentra en Puntarenas, a 90 metros de la playa, y cuenta con restaurante."
						descuento1={5}
						descuento2={30}
						desprecio="de habitación por noche "
						simbolo="$"
						moneda={35}
					/>
					<CardHotel
						link="https://secureservercdn.net/192.169.222.215/ukb.a7a.myftpupload.com/wp-content/uploads/2020/07/our-suites-video_new.jpg"
						title="Vida Mountain Resort"
						descripcion="Con un patio delantero con impresionantes vistas del océano Pacífico y las montañas circundantes, cada dormitorio individual es ideal para cualquier pareja."
						descuento1={5}
						descuento2={30}
						desprecio="de habitación por noche "
						simbolo="$"
						moneda={40}
					/>
					<CardHotel
						link="https://www.vistalasislas.com/wp-content/uploads/2016/11/VLI_economy_room01-1024x683.jpg"
						title="Hotel Vista Las Islas"
						descripcion="Nuestras acogedoras habitaciones familiares estándar están situadas justo en frente del bosque tropical y la vegetación exuberante"
						descuento1={5}
						descuento2={30}
						desprecio="de habitación por noche "
						simbolo="$"
						moneda={40}
					/>
				</div>
			</div>
			<div>
				<div className="mt-4">
					<h2>Limón</h2>
				</div>
				<div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-1 pt-2">
					<CardHotel
						link="https://cf.bstatic.com/images/hotel/max1024x768/158/158937524.jpg"
						title="Hotel Boutique La Casa De Las Flores"
						descripcion="El Hotel La Casa de las Flores se encuentra en Cahuita, a solo 230 metros de la terminal de autobuses y del centro comercial. Ofrece un desayuno continental gratuito y conexión Wi-Fi gratuita."
						descuento1={5}
						descuento2={30}
						desprecio="de habitación por noche "
						simbolo="$"
						moneda={40}
					/>
					<CardHotel
						link="https://exp.cdn-hotels.com/hotels/4000000/3090000/3088100/3088090/8c63e587_z.jpg?impolicy=fcrop&w=1000&h=666&q=medium"
						title="Cariblue Beach"
						descripcion="En Sole Luna, restaurante informal con vista a la piscina, se sirven desayunos, almuerzos y cenas. Los huéspedes pueden disfrutar de bebidas en el bar"
						descuento1={5}
						descuento2={30}
						desprecio="de habitación por noche "
						simbolo="$"
						moneda={40}
					/>
					<CardHotel
						link="https://cf.bstatic.com/images/hotel/max1024x768/288/288329400.jpg"
						title="Hotel Colina Secreta"
						descripcion="El Colina Secreta se encuentra en Puerto Viejo, a 2,8 km de la playa Chiquita, y ofrece alojamiento con salón compartido, aparcamiento privado gratuito, jardín y terraza"
						descuento1={5}
						desprecio="de habitación por noche "
						simbolo="$"
						moneda={40}
						descuento2={30}
					/>
					<CardHotel
						link="https://cf.bstatic.com/images/hotel/max1024x768/196/196024858.jpg"
						title="Ecolirios Boutique"
						descripcion="Este lugar es maravilloso. Tiene un estética que promueve una experiencia única con la naturaleza con el entorno y con uno mismo."
						descuento1={5}
						descuento2={30}
						desprecio="de habitación por noche "
						simbolo="$"
						moneda={40}
					/>
					<CardHotel
						link="https://cf.bstatic.com/images/hotel/max1024x768/264/264388593.jpg"
						title="La Kukula Lodge"
						descripcion="La Kukula Lodge se encuentra en Puerto Viejo, a solo 200 metros de la playa Chiquita. Ofrece conexión Wi-Fi gratuita y piscina al aire libre."
						descuento1={5}
						descuento2={30}
						desprecio="de habitación por noche "
						simbolo="$"
						moneda={45}
					/>
					<CardHotel
						link="https://cf.bstatic.com/images/hotel/max1024x768/295/295725208.jpg"
						title="Hotel Ocean View Lodge"
						descripcion="El Ocean View Lodge está situado en Cahuita, a 800 metros de Negra, y ofrece alojamiento con WiFi gratuita y aparcamiento privado gratuito. Ofrece habitaciones familiares y terraza. "
						descuento1={5}
						descuento2={30}
						desprecio="de habitación por noche "
						simbolo="$"
						moneda={45}
					/>
					<CardHotel
						link="https://cf.bstatic.com/images/hotel/max1024x768/181/181941682.jpg"
						title="Hotel Sunshine Caribe"
						descripcion="Las habitaciones del Sunshine Caribe gozan de vistas al jardín e incluyen zona de estar, escritorio y baño privado con ducha y artículos de aseo gratuitos."
						descuento1={5}
						descuento2={30}
						desprecio="de habitación por noche "
						simbolo="$"
						moneda={45}
					/>
				</div>
			</div>
		</div>
	);
};
