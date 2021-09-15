import React, { useEffect, useState } from "react";
import AllGenresPage from "./AllGenresPage";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { useQuery } from "react-query";
import { useParams, useHistory } from "react-router-dom";
import { getGenre } from "../services/TMDB";

const GenrePage = () => {
	const { id } = useParams();
	const history = useHistory();
	const [page, setPage] = useState(1);
	const { data, error, isError, isLoading, isPreviousData } = useQuery(
		["genre", id, page],
		() => getGenre(id, page),
		{
			keepPreviousData: true,
		}
	);

	useEffect(() => {
		console.log("data is:", data);
	}, [data]);

	return (
		// <> </>
		<Container>
			<h1 className="text-light pt-4 pb-4">placeholder</h1>
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
										{/* <Card.Text>{movie.overview}</Card.Text> */}
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
			<div className="pagination d-flex justify-content-between align-items-center mt-4">
				<Button
					onClick={() =>
						setPage((currentPage) => Math.max(currentPage - 1, 1))
					}
					disabled={page === 1}
				>
					Previous Page
				</Button>

				<span className="text-light">Current Page: {page}</span>

				<Button
					onClick={() => {
						if (!isPreviousData && data.results.page) {
							setPage((currentPage) => currentPage + 1);
						}
					}}
					disabled={isPreviousData || !data?.results.page}
				>
					Next Page
				</Button>
			</div>
		</Container>
	);
};

export default GenrePage;
