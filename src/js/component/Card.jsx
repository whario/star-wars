import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/card.scss";
import { Context } from "../store/appContext";

function Card(props) {
	const { store, actions } = useContext(Context);
	return (
		<div className="card">
			<img src="https://dummyimage.com/400x200/cccccc/ffffff.jpg" className="card-img-top" alt="img-random" />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">
					{props.subTitle1}
					{props.text1}
				</p>
				<p className="card-text">
					{props.subTitle2}
					{props.text2}
				</p>
				<p className="card-text">
					{props.subTitle3}
					{props.text3}
				</p>
				<div className="row">
					<Link
						className="btn btn-info"
						to={props.url}
						onClick={() => actions.addURL(props.info.replace("http", "https"))}>
						Learn more!
					</Link>
					<button
						type="button"
						className="btn btn-outline-warning"
						onClick={() => actions.getFavorites(props.name)}>
						{store.favorites.includes(props.name) ? (
							<i className="fas fa-heart" />
						) : (
							<i className="far fa-heart" />
						)}
					</button>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	name: PropTypes.string,
	text1: PropTypes.string,
	text2: PropTypes.string,
	text3: PropTypes.string,
	subTitle1: PropTypes.string,
	subTitle2: PropTypes.string,
	subTitle3: PropTypes.string,
	url: PropTypes.string,
	info: PropTypes.string
};

export default Card;
