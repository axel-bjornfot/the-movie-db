import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navigation from "./pages/partials/Navigation";
import TopRatedMoviesPage from "./pages/TopRatedMoviesPage";
import PopularMoviesPage from "./pages/PopularMoviesPage";
import LatestMoviesPage from "./pages/LatestMoviesPage";
import MoviePage from "./pages/MoviePage";
import CastPage from "./pages/CastPage";

function App() {
	return (
		<>
			<Navigation />

			<div id="App">
				<Switch>
					<Route exact path="/">
						<HomePage />
					</Route>

					<Route exact path="/top-rated">
						<TopRatedMoviesPage />
					</Route>

					<Route exact path="/popular">
						<PopularMoviesPage />
					</Route>

					<Route exact path="/latest">
						<LatestMoviesPage />
					</Route>

					<Route path="/movie/:id">
						<MoviePage />
					</Route>

					<Route path="/movie/credits/:id">
						<CastPage />
					</Route>
				</Switch>
			</div>
		</>
	);
}

export default App;
