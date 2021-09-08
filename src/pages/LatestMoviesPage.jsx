import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useQuery } from "react-query";
import { getLatestMovies } from "../services/TMDB";

const LatestMoviesPage = () => {
	const { data, error, isError, isLoading } = useQuery(
		["Latest-movies"],
		() => getLatestMovies()
	);

	useEffect(() => {
		console.log("data is:", data);
	}, [data]);

	return (
		<Container>
			<h1 className="mt-4 mb-4">Latest Movies</h1>
			<Row xs={1} md={2} lg={3} xl={4} className="g-4">
				{isLoading && <p className="my-3">Loading Movies...</p>}

				{isError && <p className="my-3">({error})</p>}

				{data?.results && <>{data.results.title}</>}
			</Row>
		</Container>
	);
};

export default LatestMoviesPage;
