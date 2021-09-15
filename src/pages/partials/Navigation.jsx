import React from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
	return (
		<Navbar bg="danger" variant="dark" expand="md">
			<Container>
				<Link to="/" className="navbar-brand">
					Movies DB
				</Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<NavLink to="/top-rated" className="nav-link">
							Top Rated Movies
						</NavLink>

						<NavLink to="/popular" className="nav-link">
							Popular Movies
						</NavLink>

						<NavLink to="/genres" className="nav-link">
							Genres
						</NavLink>

						<NavLink to="/latest" className="nav-link">
							Latest Movies
						</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigation;
