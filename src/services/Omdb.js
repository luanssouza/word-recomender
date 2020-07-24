import Axios from 'axios';

var instance = Axios.create({
    baseURL: "http://www.omdbapi.com/",
});

instance.interceptors.request.use(config => {
    config.params = {
        apikey: process.env.REACT_APP_OMDB_API_KEY,
        type: "movie",
        ...config.params,
    };
    return config;
});

export default instance; 