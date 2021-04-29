import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { LoginPage } from "./pages/login";
import { Perfil } from "./component/perfil";
import { RegisterPage } from "./pages/register";
import { Hoteles } from "./pages/hotelesrestaurantes";
import { SocialPage } from "./pages/social";
import { ForgotPassword } from "./pages/forgotpassword";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/login">
							<LoginPage />
						</Route>
						<Route exact path="/register">
							<RegisterPage />
						</Route>
						<Route exact path="/forgotpassword">
							<ForgotPassword />
						</Route>
						<Route exact path="/hotelesrestaurantes">
							<Hoteles />
						</Route>
						<Route exact path="/social">
							<SocialPage />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/perfil">
							<Perfil />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
