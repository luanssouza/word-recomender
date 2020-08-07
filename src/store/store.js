import { createStore, combineReducers } from 'redux'

import userReducer from './user/user'
import moviesReducer from './movie/movies'
import recommendationsReducer from './recommendation/recommendation'

const reducers = combineReducers({
    user: userReducer,
    movies: moviesReducer,
    recommendations: recommendationsReducer,
})

export const store = createStore(reducers);