import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getPerson } from "../services/TMDB";

const PersonPage = () => {
	const { id } = useParams();

	const { data, error, isError, isLoading } = useQuery(["person", id], () =>
		getPerson(id)
	);

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
					<Col xs={7} md={5} lg={4} xl={4} className="pt-4 m-auto">
						<Card text="light" bg="info">
							{data.results.profile_path && (
								<Card.Img
									src={`https://image.tmdb.org/t/p/w500/${data.results.profile_path}`}
									alt="Card image"
								/>
							)}
							<Card.ImgOverlay></Card.ImgOverlay>
						</Card>
						<Card>
							<Card.Body>
								<Card.Title>{data.results.name}</Card.Title>
								<Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
								<Card.Text>{data.results.biography}</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<h1 className="text-light pt-5">Har också medvaarkat i</h1>
					<Row className="pt-4">
						{data.results.credits.cast.map((movie, i) => (
							<Col
								key={i}
								xs={5}
								md={4}
								lg={3}
								xl={2}
								className="pt-4 m-auto"
							>
								<Card text="light" bg="info">
									<Card.Body>
										{(movie.poster_path && (
											<Card.Img
												src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
												alt="Card image"
											/>
										)) || (
											<Card.Img
												src={`https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimgix.ranker.com%2Fuser_node_img%2F66%2F1304212%2Foriginal%2Fjohn-cena-photo-u61%3Ffm%3Dpjpg%26q%3D80&f=1&nofb=1`}
												alt="Card image"
											/>
										)}
										<Card.Title key={i}>
											{movie.title}
										</Card.Title>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
				</>
			)}
		</Container>
	);
};

export default PersonPage;
