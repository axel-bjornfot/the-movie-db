import React from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Link to="/" className="navbar-brand">
					Movies DB
				</Link>

				<Nav className="ms-auto">
					<NavLink to="/top-rated" className="nav-link">
						Top Rated Movies
					</NavLink>

					<NavLink to="/popular" className="nav-link">
						Popular Movies
					</NavLink>

					<NavLink to="/latest" className="nav-link">
						Latest Movies
					</NavLink>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Navigation;
