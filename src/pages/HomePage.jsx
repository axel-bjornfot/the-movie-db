import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import vhs from "../assets/vhs-tapes.jpg";

const HomePage = () => {
	return (
		<Container className="py-3">
			<Card text="light" bg="info">
				<Card.Img src={vhs} alt="Card image" />
				<Card.ImgOverlay></Card.ImgOverlay>
			</Card>
			<h1 className="text-light pt-4">
				Welcome to Axel's Movie DB website
			</h1>
		</Container>
	);
};

export default HomePage;
