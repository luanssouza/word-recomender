import { createStore, combineReducers } from 'redux'

import userReducer from './user/user'
import moviesReducer from './movie/movies'

const reducers = combineReducers({
    user: userReducer,
    movies: moviesReducer
})

export const store = createStore(reducers);