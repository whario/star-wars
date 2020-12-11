import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from "reactstrap";
import "../../styles/navbar.scss";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [dropdown, setDropdown] = useState(false);
	const openDropdown = () => {
		setDropdown(!dropdown);
	};
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-emblema.jpg"
						className="logo-starwars"
						alt="logo"
					/>
				</span>
			</Link>
			<div className="ml-auto" />
			<Dropdown isOpen={dropdown} toggle={openDropdown}>
				<DropdownToggle>
					<div>
						Favorites
						<span className="favorites">{store.favorites.length}</span>
					</div>
				</DropdownToggle>
				<DropdownMenu>
					{store.favorites.length == 0 ? (
						<DropdownItem className="">(empty)</DropdownItem>
					) : (
						store.favorites.map((favorite, key) => {
							return (
								<DropdownItem key={key}>
									{favorite}
									<span className="icon">
										<i
											className="fas fa-trash-alt"
											onClick={() => {
												actions.deleteFavorites(favorite.id);
											}}
										/>
									</span>
								</DropdownItem>
							);
						})
					)}
				</DropdownMenu>
			</Dropdown>
		</nav>
	);
};
