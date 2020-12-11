import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

function Single(props) {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getSingle(store.path);
	}, []);
	console.log(store.detail);
	const type = store.path.split("/")[4]; //la posicion 4 me dice si es planeta o people
	console.log(Object.values(store.detail));
	return (
		<div className="container justify-content-center">
			<div className="row">
				<div className="img-detail">
					<img
						src="https://dummyimage.com/800x600/cccccc/ffffff.jpg"
						className="card-img-top"
						alt="img-random"
					/>
				</div>
				<div className="text-detail">
					<h2>{store.detail.name}</h2>
					<p>
						Esta es una descripción estandar para todos los objetos. Como la API de Star Wars no devuleve
						una descripción detallada de cada objeto pongo este texto de ejemplo para simular el efecto de
						una desripción larga.
					</p>
				</div>
			</div>
			<hr />
			<div className="row">
				{Object.keys(store.detail).map((value, index) => {
					//el mapeo de un objeto se hace diferente. El value que me devuelve realmente es el nombre de key
					if (type == "planets") {
						if (
							value == "climate" ||
							value == "population" ||
							value == "rotation_period" ||
							value == "orbital_period" ||
							value == "diameter"
						) {
							return (
								<div key={index}>
									<h5>{value.replace("_", " ")}</h5>
									<h6>{store.detail[value]}</h6>
								</div>
							);
						}
					} else {
						if (
							value == "birth_year" ||
							value == "gender" ||
							value == "hair_color" ||
							value == "skin_color" ||
							value == "eye_color"
						) {
							return (
								<div key={index}>
									<h5>{value.replace("_", " ")}</h5>
									<h6>{store.detail[value]}</h6>
								</div>
							);
						}
					}
				})}
			</div>
		</div>
	);
}
export default Single;
