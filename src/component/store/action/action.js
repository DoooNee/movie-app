import axios from 'axios';
import * as types from '../type';

const API_KEY = '943c4cf18c4bb37a51ee961efccd3f58';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularityRanking = () => async (dispatch) => {
    try {
        const results =
            await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate
        `);
        dispatch({ type: types.GET_POPULARITY_RANKING, payload: results.data.results });
    } catch (error) {
        console.log('ERROR GET API POPULARITY: ' + error.message);
    }
};

export const getTopRatedMovie = () => async (dispatch) => {
    try {
        const results = await axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1
            `);
        dispatch({ type: types.GET_TOP_RATED_MOVIE, payload: results.data.results });
    } catch (error) {
        console.log('ERROR GET API TOP RATED', error);
    }
};

export const getActionMovie = () => async (dispatch) => {
    try {
        const results = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28
            `);
        dispatch({ type: types.GET_ACTION_MOVIE, payload: results.data.results });
    } catch (error) {
        console.log('ERROR GET API ACTIONS ', error);
    }
};

export const getComedyMovie = () => async (dispatch) => {
    try {
        const results = await axios.get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1
            `);
        dispatch({ type: types.GET_COMEDY_MOVIE, payload: results.data.results });
    } catch (error) {
        console.log('ERROR GET API COMMeDY ', error);
    }
};
export const getHorrorMovie = () => async (dispatch) => {
    try {
        const results = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35
            `);
        dispatch({ type: types.GET_HORROR_MOVIE, payload: results.data.results });
    } catch (error) {
        console.log('ERROR GET API HORROR ', error);
    }
};

export const getRomanceMovie = () => async (dispatch) => {
    try {
        const results = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749
            `);
        dispatch({ type: types.GET_ROMANCE_MOVIE, payload: results.data.results });
    } catch (error) {
        console.log('ERROR GET API ROMANCE ', error);
    }
};

export const getDocumentMovie = () => async (dispatch) => {
    try {
        const results = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99
            `);
        dispatch({ type: types.GET_DOCUMENT_MOVIE, payload: results.data.results });
    } catch (error) {
        console.log('ERROR GET API DOCUMENT ', error);
    }
};

export const getTrendingMovie = () => async (dispatch) => {
    try {
        const results = await axios.get(`${BASE_URL}/trending/all/week?api_key=${API_KEY}
            `);
        dispatch({ type: types.GET_TRENDING_MOVIE, payload: results.data.results });
    } catch (error) {
        console.log('ERROR GET API TRENDING_MOVIE', error);
    }
};

// setMovieDetail
export const setMovieDetail = (movie) => (dispatch) => {
    dispatch({ type: types.SET_MOVIE_DETAIL, payload: movie });
};

// getSeachMovie

export const getSearchMovies = (keywords) => async (dispatch) => {
    try {
        const results = await axios.get(
            `${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&include_adult=false&query=${keywords}`,
        );
        dispatch({ type: types.GET_SEARCH_MOVIES, payload: results.data.results });
    } catch (error) {
        console.log('ERROR GET API SEARCH MOVIES', error);
    }
};
