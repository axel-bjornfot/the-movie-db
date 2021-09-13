import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getPersonCredits } from "../services/TMDB";

const PersonCredits = () => {
	const { id } = useParams();

	const { data, error, isError, isLoading } = useQuery(
		["person-credits", id],
		() => getPersonCredits(id)
	);

	useEffect(() => {
		console.log("Credits data is:", data);
	}, [data]);

	return (
		<Container>
			<h2>Har också medverkat i</h2>
			{isLoading && <p className="my-3">Loading...</p>}

			{isError && <p className="my-3">({error})</p>}

			{data?.results && (
				<>
					{data.results.cast.map((movie, i) => (
						<Card key={i} style={{ width: "12rem" }}>
							{(movie.poster_path && (
								<Card.Img
									variant="top"
									src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
									alt="Movie poster"
								/>
							)) || (
								<Card.Img
									variant="top"
									src={`https://images.unsplash.com/photo-1514651029128-173d2e6ea851?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=632&q=80`}
									alt="No img found for this movie"
								/>
							)}

							<Card.Body>
								<Card.Title>{movie.title}</Card.Title>
								<Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
							</Card.Body>
						</Card>
					))}
				</>
			)}
		</Container>
	);
};

export default PersonCredits;
