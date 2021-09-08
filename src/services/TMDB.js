import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/movie";

// axios.defaults.headers.common["23b3cee502f94de0e12fcb7cd6a87030"] = AUTH_TOKEN;
const auth = "23b3cee502f94de0e12fcb7cd6a87030";

const get = async (endpoint) => {
	const response = await axios.get(endpoint);

	return {
		results: response.data,
	};
};

export const getTopRatedMovies = async () => {
	return get(`/top_rated/?api_key=${auth}&language=en-US&page=1`);
};

export const getPopularMovies = async () => {
	return get(`/popular/?api_key=${auth}&language=en-US&page=1`);
};

export const getLatestMovies = async () => {
	return get(
		`https://api.themoviedb.org/3/movie/latest?api_key=${auth}&language=en-US`
	);
};

export default {
	getTopRatedMovies,
	getPopularMovies,
	getLatestMovies,
};
