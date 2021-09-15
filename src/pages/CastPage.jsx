import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { useQuery } from "react-query";
import { useParams, useHistory } from "react-router-dom";
import { getCast } from "../services/TMDB";

const CastPage = () => {
	const { id } = useParams();
	const history = useHistory();
	const { data, error, isError, isLoading } = useQuery(["cast", id], () =>
		getCast(id)
	);

	useEffect(() => {
		console.log("data is:", data);
	}, [data]);

	return (
		<Container>
			<h1 className="mt-4 mb-4">Cast</h1>
			<Row xs={2} md={3} lg={4} xl={5} className="g-4">
				{isLoading && <p className="my-3">Loading...</p>}

				{isError && <p className="my-3">({error})</p>}

				{data?.results && (
					<>
						{data.results.cast.map((actor, i) => (
							<Col key={i}>
								<Card text="light" bg="info">
									{(actor.profile_path && (
										<Card.Img
											variant="top"
											src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
											alt="Profile of actor"
										/>
									)) || (
										<Card.Img
											variant="top"
											src={`https://cdn.pixabay.com/photo/2014/06/24/17/34/silhouette-376538_960_720.jpg`}
											alt="Profile of actor"
										/>
									)}
									<Card.Body>
										<Card.Title>{actor.name}</Card.Title>
										<Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
										<Button
											variant="dark"
											onClick={() => {
												history.push(
													`/person/${actor.id}`
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

export default CastPage;
