import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const auth = "23b3cee502f94de0e12fcb7cd6a87030";

const get = async (endpoint) => {
	const response = await axios.get(endpoint);

	return {
		results: response.data,
	};
};

export const getTopRatedMovies = async () => {
	return get(
		`/movie/top_rated?api_key=${auth}&language=en-US&page=1&region=SE`
	);
};

export const getPopularMovies = async () => {
	return get(
		`/movie/popular?api_key=${auth}&language=en-US&page=1&region=SE`
	);
};

export const getMoviesNowPlaying = async () => {
	return get(`/movie/now_playing?api_key=${auth}&language=en-US&region=SE`);
};

export const getMovie = async (id) => {
	return get(`/movie/${id}?api_key=${auth}&language=en-US`);
};

export const getCast = async (id) => {
	return get(`/movie/${id}/credits?api_key=${auth}&language=en-US`);
};

//get person and credits
export const getPerson = async (id) => {
	return get(
		`/person/${id}?api_key=${auth}&language=en-US&append_to_response=credits`
	);
};

export const getAllGenres = async () => {
	return get(`/genre/movie/list?api_key=${auth}&language=en-US`);
};

export const getGenre = async (id, page) => {
	return get(
		`/discover/movie?api_key=${auth}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${id}&with_watch_monetization_types=flatrate`
	);
};

export default {
	getTopRatedMovies,
	getPopularMovies,
	getMoviesNowPlaying,
	getMovie,
	getCast,
	getPerson,
	getAllGenres,
	getGenre,
};
