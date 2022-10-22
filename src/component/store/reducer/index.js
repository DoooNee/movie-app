import { combineReducers } from 'redux';
import reducerMovie from './reducerMovie';

const rootReducer = combineReducers({
    infoMovies: reducerMovie,
});

export default rootReducer;
