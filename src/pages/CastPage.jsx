import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getCast } from "../services/TMDB";

const CastPage = () => {
	let { id } = useParams();
	const { data, error, isError, isLoading } = useQuery(["cast", id], () =>
		getCast(id)
	);

	useEffect(() => {
		console.log("data is:", data);
	}, [data]);

	return (
		<>
			{isLoading && <p className="my-3">Loading Movie...</p>}
			{isError && <p className="my-3">error: {error}</p>}
			{data?.results && <p>data is real</p>}
		</>
	);
};

export default CastPage;
