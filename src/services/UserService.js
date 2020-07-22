import axios from 'axios';

class UserService {
    postUser = async (user) => axios.post('example', user);
}

export default UserService;