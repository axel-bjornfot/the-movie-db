import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { useQueries, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getPerson, getPersonCredits } from "../services/TMDB";
import PersonCredits from "../components/PersonCredits";

const PersonPage = () => {
	const { id } = useParams();

	const { data, error, isError, isLoading } = useQuery(["person", id], () =>
		getPerson(id)
	);

	// const results = useQueries([
	// 	{ getPerson(id) [("person", id)] },

	// 	{ getPersonCredits: [(, id)] },
	// 	,
	// ]);

	useEffect(() => {
		console.log("data is:", data);
	}, [data]);

	return (
		// <> </>
		<Container>
			{isLoading && <p className="my-3">Loading...</p>}

			{isError && <p className="my-3">({error})</p>}

			{data?.results && (
				<>
					{data.results.profile_path && (
						<Card style={{ width: "20em" }}>
							<Card.Img
								src={`https://image.tmdb.org/t/p/w500/${data.results.profile_path}`}
								alt="Card image"
							/>
							<Card.ImgOverlay></Card.ImgOverlay>
						</Card>
					)}

					<Card style={{ width: "20em" }}>
						<Card.Body>
							<Card.Title>{data.results.name}</Card.Title>
							<Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
							<Card.Text>{data.results.biography}</Card.Text>
						</Card.Body>
					</Card>
					<PersonCredits></PersonCredits>
				</>
			)}
		</Container>
	);
};

export default PersonPage;
