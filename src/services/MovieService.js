import axios from 'axios';


const httpClient = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export const getMovies = async () => httpClient.get('mostwatched');
export const getMoviesByTitle = async (title) => httpClient.get( 'omdb', { params: { title: title } });
export const getMovieJustify = async (movie_id) => httpClient.get(`example/${movie_id}`);
export const getMovieJustifies = async (movie_id) => httpClient.get(`example/${movie_id}`);