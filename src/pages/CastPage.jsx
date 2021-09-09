import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getCast } from "../services/TMDB";

const CastPage = () => {
	const { id } = useParams();
	const { data, error, isError, isLoading } = useQuery(["cast", id], () =>
		getCast(id)
	);

	useEffect(() => {
		console.log("data is:", data);
	}, [data]);

	return (
		<>
			{isLoading && <p className="my-3">Loading Cast...</p>}
			{isError && <p className="my-3">error: {error}</p>}
			{data?.results && <Card className="bg-dark text-white"></Card>}
			showing the id: {id}
		</>
	);
};

export default CastPage;
