import { ADD_USER } from '../../actions/actionsConst';

export default (state = {}, action) => {
    switch(action.type) {
        case ADD_USER:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
}