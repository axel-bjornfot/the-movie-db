import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useHistory } from "react-router";
import { useQuery } from "react-query";
import { getTopRatedMovies } from "../services/TMDB";

const TopRatedMoviesPage = () => {
	const history = useHistory();
	const { data, error, isError, isLoading } = useQuery(
		["top-rated-movies"],
		() => getTopRatedMovies()
	);

	useEffect(() => {
		console.log("data is:", data);
	}, [data]);

	return (
		<Container>
			<h1 className="mt-4 mb-4">Top Rated Movies</h1>
			<Row xs={1} md={2} lg={3} xl={4} className="g-4">
				{isLoading && <p className="my-3">Loading Movies...</p>}

				{isError && <p className="my-3">({error})</p>}

				{data?.results && (
					<>
						{data.results.results.map((movie, i) => (
							<Col key={i}>
								<Card style={{ width: "18rem" }}>
									<Card.Img
										variant="top"
										src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
										alt="movie poster"
									/>
									<Card.Body>
										<Card.Title>{movie.title}</Card.Title>
										<Card.Subtitle className="mb-2 text-muted">
											{movie.vote_average}
										</Card.Subtitle>
										{/* <Card.Text>{movie.overview}</Card.Text> */}
										<Button
											variant="primary"
											onClick={() => {
												history.push(
													`/movie/${movie.id}`
												);
											}}
										>
											Go somewhere
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

export default TopRatedMoviesPage;
