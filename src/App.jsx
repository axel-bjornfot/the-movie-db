import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navigation from "./pages/partials/Navigation";
import TopRatedMoviesPage from "./pages/TopRatedMoviesPage";
import PopularMoviesPage from "./pages/PopularMoviesPage";
import MoviesNowPlayingPage from "./pages/MoviesNowPlayingPage";
import MoviePage from "./pages/MoviePage";
import CastPage from "./pages/CastPage";
import PersonPage from "./pages/PersonPage";
import AllGenresPage from "./pages/AllGenresPage";
import GenrePage from "./pages/GenrePage";

function App() {
	return (
		<>
			<Navigation />

			<div className="pb-5" id="App">
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

					<Route exact path="/now-playing">
						<MoviesNowPlayingPage />
					</Route>

					<Route exact path="/genres">
						<AllGenresPage />
					</Route>

					<Route exact path="/genres/:id/:pageId">
						<GenrePage />
					</Route>

					<Route path="/person/:id">
						<PersonPage />
					</Route>

					<Route path="/movie/:id/cast">
						<CastPage />
					</Route>

					<Route path="/movie/:id">
						<MoviePage />
					</Route>
				</Switch>
			</div>
		</>
	);
}

export default App;
