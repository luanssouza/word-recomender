import { ADD_EXPLANATIONS } from '../../actions/actionsConst';

export default (state = {}, action) => {
    switch(action.type) {
        case ADD_EXPLANATIONS:
            return {
                ...state,
                explanations: action.payload
            };
        default:
            return state;
    }
}