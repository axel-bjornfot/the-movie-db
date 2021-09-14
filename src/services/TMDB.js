import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

// axios.defaults.headers.common["23b3cee502f94de0e12fcb7cd6a87030"] = AUTH_TOKEN;
const auth = "23b3cee502f94de0e12fcb7cd6a87030";

const get = async (endpoint) => {
	const response = await axios.get(endpoint);

	return {
		results: response.data,
	};
};

export const getTopRatedMovies = async () => {
	return get(`/movie/top_rated/?api_key=${auth}&language=en-US&page=1`);
};

export const getPopularMovies = async () => {
	return get(`/movie/popular/?api_key=${auth}&language=en-US&page=1`);
};

export const getLatestMovies = async () => {
	return get(`/movie/latest?api_key=${auth}&language=en-US`);
};

export const getMovie = async (id) => {
	return get(`/movie/${id}?api_key=${auth}&language=en-US`);
};

export const getCast = async (id) => {
	return get(`/movie/${id}/credits?api_key=${auth}&language=en-US`);
};

export const getPerson = async (id) => {
	return get(
		`/person/${id}?api_key=${auth}&language=en-US&append_to_response=credits`
	);
};

export const getPersonCredits = async (id) => {
	return get(`/person/${id}/credits?api_key=${auth}&language=en-US`);
};

export const getAllGenres = async () => {
	return get(`/genre/movie/list?api_key=${auth}&language=en-US`);
};

export const getGenre = async (id, page = null) => {
	return get(
		`https://api.themoviedb.org/3/discover/movie?api_key=${auth}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${id}&with_watch_monetization_types=flatrate`
	);
};

export default {
	getTopRatedMovies,
	getPopularMovies,
	getLatestMovies,
	getMovie,
	getCast,
	getPerson,
	getPersonCredits,
	getAllGenres,
	getGenre,
};
