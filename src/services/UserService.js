import axios from 'axios';

const httpClient = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export const insertUser = async (user) => httpClient.post('user', user);