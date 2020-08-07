import Axios from 'axios';

var instance = Axios.create({
    baseURL: "https://kkg6ezn4e2.execute-api.us-east-1.amazonaws.com/dev/",
});
export default instance; 