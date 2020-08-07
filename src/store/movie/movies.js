import { ADD_MOVIES } from '../actions/actionsConst';

export default (state = {}, action) => {
    switch(action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
}