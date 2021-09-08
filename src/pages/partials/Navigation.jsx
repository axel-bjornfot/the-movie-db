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

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Nav className="ms-auto">
					<NavLink to="/top-rated" className="nav-link">
						Top Rated Movies
					</NavLink>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Navigation;
