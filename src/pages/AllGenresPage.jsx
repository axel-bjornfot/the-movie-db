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
			<h1 className="mt-4 mb-4">Movie genres</h1>
			<Row xs={2} md={3} lg={4} xl={5} className="g-4">
				{isLoading && <p className="my-3">Loading Movies...</p>}

				{isError && <p className="my-3">({error})</p>}

				{data?.results && (
					<>
						{data.results.genres.map((genre, i) => (
							<Col key={i}>
								<Card style={{ width: "12rem" }}>
									<Card.Body>
										<Card.Title>{genre.name}</Card.Title>

										{/* <Card.Text>{movie.overview}</Card.Text> */}
										<Button
											variant="dark"
											onClick={() => {
												history.push(
													`/genres/${genre.id}`
												);
											}}
										>
											More info
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
