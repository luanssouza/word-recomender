import { ADD_RECOMMENDATION } from '../../actions/actionsConst';

export default (state = {}, action) => {
    switch(action.type) {
        case ADD_RECOMMENDATION:
            return {
                ...state,
                recommendations: action.payload
            };
        default:
            return state;
    }
}