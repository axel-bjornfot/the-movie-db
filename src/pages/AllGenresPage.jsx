import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useHistory } from "react-router";
import { useQuery } from "react-query";
import { getAllGenres } from "../services/TMDB";

const AllGenresPage = () => {
	const history = useHistory();
	const { data, error, isError, isLoading } = useQuery(["genres"], () =>
		getAllGenres()
	);

	useEffect(() => {
		console.log("data is:", data);
	}, [data]);

	return (
		<Container>
			<h1 className="text-light pt-4 pb-4">Movie Genres</h1>
			<Row xs={2} md={3} lg={3} xl={3} className="g-4">
				{isLoading && <p className="my-3">Loading Movies...</p>}

				{isError && <p className="my-3">({error})</p>}

				{data?.results && (
					<>
						{data.results.genres.map((genre, i) => (
							<Col key={i}>
								<Card text="light" bg="info">
									<Card.Body>
										<Card.Title>{genre.name}</Card.Title>

										<Button
											variant="primary"
											onClick={() => {
												history.push(
													`/genres/${genre.id}`
												);
											}}
										>
											Movies
										</Button>
									</Card.Body>
								</Card>
							</Col>
						))}
					</>
				)}
			</Row>
		</Container>
	);
};

export default AllGenresPage;
