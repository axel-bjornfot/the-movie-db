import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useHistory } from "react-router";
import { useQuery } from "react-query";
import { getMoviesNowPlaying } from "../services/TMDB";

const MoviesNowPlaying = () => {
	const history = useHistory();
	const { data, error, isError, isLoading } = useQuery(
		["Latest-movies"],
		() => getMoviesNowPlaying()
	);

	useEffect(() => {
		console.log("data is:", data);
	}, [data]);

	return (
		<Container>
			<h1 className="text-light pt-4 pb-4">Top Rated Movies</h1>
			<Row xs={2} md={3} lg={4} xl={5} className="g-4">
				{isLoading && <p className="my-3">Loading Movies...</p>}

				{isError && <p className="my-3">({error})</p>}

				{data?.results && (
					<>
						{data.results.results.map((movie, i) => (
							<Col key={i}>
								<Card text="light" bg="info">
									<Card.Img
										variant="top"
										src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
										alt="movie poster"
									/>
									<Card.Body>
										<Card.Title>{movie.title}</Card.Title>
										<Card.Subtitle className="mb-2 text-muted">
											Rating: {movie.vote_average}
										</Card.Subtitle>

										<Button
											variant="primary"
											onClick={() => {
												history.push(
													`/movie/${movie.id}`
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

export default MoviesNowPlaying;
