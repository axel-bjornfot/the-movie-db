import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Image, { propTypes } from "react-bootstrap/Image";
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

	useEffect(() => {
		console.log("data is:", data);
	}, [data]);

	return (
		<>
			{isLoading && <p className="my-3">Loading Movie...</p>}

			{isError && <p className="my-3">error: {error}</p>}

			{data?.results && (
				<Card text="light" bg="info">
					<Card.Img
						src={`https://image.tmdb.org/t/p/original/${data.results.backdrop_path}`}
						alt="Card image"
					/>
					<Card.ImgOverlay>
						<Card.Title>{data.results.title}</Card.Title>
						<Card.Text>{data.results.overview}</Card.Text>
						<Card.Text>
							Released: {data.results.release_date}
						</Card.Text>
						<Button
							variant="dark"
							onClick={() => {
								history.push(`/movie/${data.results.id}/cast`);
							}}
						>
							Cast
						</Button>
					</Card.ImgOverlay>
				</Card>
			)}
		</>
	);
};

export default MoviePage;
