import axios from 'axios';

class MovieService {
    getMovies = async () => axios.get('example');
    getMovieJustify = async (movie_id) => axios.get(`example/${movie_id}`);
    getMovieJustifies = async (movie_id) => axios.get(`example/${movie_id}`);
}

export default MovieService;