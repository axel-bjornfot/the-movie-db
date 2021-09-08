import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getMovie } from "../services/TMDB";

const MoviePage = () => {
	const { id } = useParams();
	const { data, error, isError, isLoading } = useQuery(["movie", id], () =>
		getMovie(id)
	);

	useEffect(() => {
		console.log("data is:", data);
	}, [data]);

	return (
		<Container className="py-3">
			{isLoading && <p className="my-3">Loading Movie...</p>}

			{isError && <p className="my-3">error: {error}</p>}

			{data?.results && (
				<>
					<Image
						src={`https://image.tmdb.org/t/p/original/${data.results.backdrop_path}`}
						fluid
					/>
					<h1>{data.results.title}</h1>
				</>
			)}
		</Container>
	);
};

export default MoviePage;
