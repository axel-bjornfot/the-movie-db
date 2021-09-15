import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getMovie } from "../services/TMDB";

const MoviePage = () => {
	const history = useHistory();
	let { id } = useParams();
	const { data, error, isError, isLoading } = useQuery(["movie", id], () =>
		getMovie(id)
	);

	return (
		<Container>
			<Row>
				{isLoading && <p className="my-3">Loading...</p>}

				{isError && <p className="my-3">error: {error.message}</p>}

				{data?.results && (
					<>
						<Card text="light" bg="info">
							<Card.Img
								src={`https://image.tmdb.org/t/p/original/${data.results.backdrop_path}`}
								alt="Card image"
							/>
							<Card.ImgOverlay></Card.ImgOverlay>
						</Card>

						<Card text="light" bg="info">
							<Card.Body>
								<Card.Title>{data.results.title}</Card.Title>
								<Card.Subtitle className="mb-2 text-muted">
									Rating: {data.results.vote_average}
								</Card.Subtitle>
								<Card.Text>{data.results.overview}</Card.Text>
								<Card.Text>
									Released: {data.results.release_date}
								</Card.Text>
								<Button
									variant="primary"
									onClick={() => {
										history.push(
											`/movie/${data.results.id}/cast`
										);
									}}
								>
									Cast
								</Button>
							</Card.Body>
						</Card>
					</>
				)}
			</Row>
		</Container>
	);
};

export default MoviePage;
