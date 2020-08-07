import { createStore, combineReducers } from 'redux'

import userReducer from './reducers/user/user'
import moviesReducer from './reducers/movie/movies'
import recommendationsReducer from './reducers/recommendation/recommendation'

const reducers = combineReducers({
    user: userReducer,
    movies: moviesReducer,
    recommendations: recommendationsReducer,
})

export const store = createStore(reducers);