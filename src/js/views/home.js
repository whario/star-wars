import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
//Importo el store que me lo proporciona la tecnologia flux
import { Context } from "../store/appContext";
//Importo mis componentes
import Card from "../component/Card.jsx";
//Importo estilos
import "../../styles/home.scss";

function Home() {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadingData("planets");
		actions.loadingData("people");
	}, []);

	return (
		<div className="container">
			<div className="characters">
				<h1>Characters</h1>
				<div className="row">
					{store.people.map((character, index) => {
						//hago un mapeado de store.people y a esta funcion le paso 2 parametros: people e index, es decir, son los datos que recibe la funcion y puedo llamarlo como quiera. En este caso uso character
						return (
							<Card //y a continuacion pongo las propiedades que recibe la Card
								key={index}
								name={character.name}
								text1={character.gender}
								text2={character.hair_color}
								text3={character.eye_color}
								subTitle1={"Gender: "}
								subTitle2={"Hair color: "}
								subTitle3={"Eye color: "}
								url={"/people/" + (index + 1)}
								info={character.url}
							/>
						);
					})}
				</div>
			</div>
			<div className="planets">
				<h1>Planets</h1>
				<div className="row">
					{store.planets.map((planet, index) => {
						return (
							<Card
								key={index}
								name={planet.name}
								text1={planet.population}
								text2={planet.terrain}
								text3={""}
								subTitle1={"Population: "}
								subTitle2={"Terrain: "}
								subTitle3={""}
								url={"/planets/" + (index + 1)}
								info={planet.url}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
export default Home;
