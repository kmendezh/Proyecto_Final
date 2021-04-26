import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams, Redirect } from "react-router-dom";
import "../../styles/social.css";
import { SocialCardsState } from "../component/socialCardsState";

export const SocialHome = () => {
	// Get Store
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="flexContainer">
				<div className="flexColumn">
					<SocialCardsState
						state="Guanacaste"
						height="450px"
						width="470px"
						url="https://aihkcdnstoragep01.blob.core.windows.net/pgl-release/Images/ArticleImages/19/19235.jpg"
						weather={store.statesTemp[4].weather}
						tmpMin={store.statesTemp[4].tempMin}
						tmpMax={store.statesTemp[4].tempMax}
					/>
					<div className="flexRow">
						<SocialCardsState
							state="San Jose"
							height="300px"
							width="230px"
							url="https://inspira-costarica.com/x/cdn/?https://storage.googleapis.com/production-gator-v1-0-0/190/472190/GB8nTYKg/a1ec52e03d494cf9beb03cc5382c353f"
							weather={store.statesTemp[0].weather}
							tmpMin={store.statesTemp[0].tempMin}
							tmpMax={store.statesTemp[0].tempMax}
						/>
						<SocialCardsState
							state="Heredia"
							height="300px"
							width="230px"
							url="https://i.pinimg.com/originals/1a/ec/e4/1aece4c7fc6f48204f559cc08b4b452e.jpg"
							weather={store.statesTemp[3].weather}
							tmpMin={store.statesTemp[3].tempMin}
							tmpMax={store.statesTemp[3].tempMax}
						/>
					</div>
				</div>

				<div className="flexColumn ml-3">
					<div>
						<SocialCardsState
							state="Alajuela"
							height="400px"
							width="300px"
							url="https://i.pinimg.com/originals/bb/dc/39/bbdc39b89ad4f071ffa325e5978d575c.jpg"
							weather={store.statesTemp[1].weather}
							tmpMin={store.statesTemp[1].tempMin}
							tmpMax={store.statesTemp[1].tempMax}
						/>
						<SocialCardsState
							state="Cartago"
							height="300px"
							width="300px"
							url="https://149478393.v2.pressablecdn.com/wp-content/uploads/2020/06/105658998_2655640854651232_100769933793677653_o.jpg"
							weather={store.statesTemp[2].weather}
							tmpMin={store.statesTemp[2].tempMin}
							tmpMax={store.statesTemp[2].tempMax}
						/>
					</div>
				</div>
				<div className="flexColumn ml-3">
					<div>
						<SocialCardsState
							state="Limón"
							height="350px"
							width="300px"
							url="https://lh3.googleusercontent.com/proxy/iIBYeHfZNaSB3o_b4e1DF7b---zXNCg9khvAH6TGJmBLUoGxk-bUqU8GSPxPtrdjKg3Qp0xzgh8XT28hLfociaBDkXhoIDAeESdZ1iF7aHWw0-DQ"
							weather={store.statesTemp[6].weather}
							tmpMin={store.statesTemp[6].tempMin}
							tmpMax={store.statesTemp[6].tempMax}
						/>
						<SocialCardsState
							state="Puntarenas"
							height="400px"
							width="250px"
							url="https://i.pinimg.com/originals/f7/f6/92/f7f6927c3ec7a758fb60df1ec41f9137.jpg"
							weather={store.statesTemp[5].weather}
							tmpMin={store.statesTemp[5].tempMin}
							tmpMax={store.statesTemp[5].tempMax}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};