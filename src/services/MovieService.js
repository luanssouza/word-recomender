import axios from 'axios';


const httpClient = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export const getMovies = async () => httpClient.get('mostwatched');
export const getMoviesByTitle = async (title) => httpClient.get( 'omdb', { params: { title: title } });
export const getRecommendation = async (body) => httpClient.post('recommendation', body);
export const postRate = async (body) => httpClient.get('recommendation', body);