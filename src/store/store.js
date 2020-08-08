import { createStore, combineReducers } from 'redux'

import userReducer from './reducers/user/user'
import moviesReducer from './reducers/movie/movies'
import recommendationsReducer from './reducers/recommendation/recommendation'
import explanationsReducer from './reducers/explanations/explanations'

const reducers = combineReducers({
    user: userReducer,
    movies: moviesReducer,
    recommendations: recommendationsReducer,
    explanations: explanationsReducer,
})

export const store = createStore(reducers);