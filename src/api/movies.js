import axios from "axios";

const baseUrl = "https://www.omdbapi.com/";
const apiKey = process.env.VUE_APP_OMDB_API_KEY;

function searchMovie(searchPhrase, page = 1) {
  return axios.get(
    `${baseUrl}?apikey=${apiKey}&s=${searchPhrase}&page=${page}`
  );
}

function getSingleMovie(movieId) {
  return axios.get(`${baseUrl}?apikey=${apiKey}&i=${movieId}`);
}

// 'http://www.omdbapi.com/?apikey=7b141d6f&s=Harry Potter'

export { searchMovie, getSingleMovie };
