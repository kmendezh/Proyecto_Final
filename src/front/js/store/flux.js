const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			statesTemp: [
				{
					state: "San Jose",
					tempMin: "",
					tempMax: "",
					weather: ""
				},
				{
					state: "Alajuela",
					tempMin: "",
					tempMax: "",
					weather: ""
				},
				{
					state: "Cartago",
					tempMin: "",
					tempMax: "",
					weather: ""
				},
				{
					state: "Heredia",
					tempMin: "",
					tempMax: "",
					weather: ""
				},
				{
					state: "Guanacaste",
					tempMin: "",
					tempMax: "",
					weather: ""
				},
				{
					state: "Puntarenas",
					tempMin: "",
					tempMax: "",
					weather: ""
				},
				{
					state: "Limon",
					tempMin: "",
					tempMax: "",
					weather: ""
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			// Get the current weather
			weatherUpdate: async () => {
				//get the store
				const store = getStore();
				let tmpArray = store.statesTemp;

				//array of states
				const stateArray = [
					"q=san jose, cr ",
					"q=alajuela, cr ",
					"q=cartago, cr ",
					"q=heredia, cr ",
					"q=guanacaste, cr ",
					"q=puntarenas, cr ",
					"q=limon, cr "
				];

				//url Weather API
				const urlAPI = "https://community-open-weather-map.p.rapidapi.com/weather?";

				let myHeaders = new Headers();
				myHeaders.append("x-rapidapi-key", "acff19e957msh166faf91c033172p1358dbjsn5c9cbdd037f7");

				let requestOptions = {
					method: "GET",
					headers: myHeaders,
					redirect: "follow"
				};

				//Get the current weather for every state
				let tmpUrl = "";
				for (let i = 0; i < stateArray.length; i++) {
					tmpUrl = urlAPI + stateArray[i];
					await fetch(tmpUrl, requestOptions)
						.then(response => response.text())
						.then(result => {
							result = JSON.parse(result);
							console.log(result);
							let weatherCondition = result.weather[0].main;
							// Store the corresponding weather icon
							if (weatherCondition == "Clouds") {
								tmpArray[i].weather = "fas fa-cloud";
							} else {
								tmpArray[i].weather = "";
							}
							let minTemp = result.main.temp_min;
							let maxTemp = result.main.temp_max;

							// Convert temperature to Celsius
							tmpArray[i].tempMax = (maxTemp - 273.15).toFixed(2);
							tmpArray[i].tempMin = (minTemp - 273.15).toFixed(2);
						})
						.catch(error => console.log("error", error));
				}

				//reset the global store
				setStore({ stateArray: tmpArray });
			}
		}
	};
};

export default getState;
