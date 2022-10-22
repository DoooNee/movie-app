import * as types from '../type';

const initState = {
    getPopularityRanking: null,
    getTopRatedMovie: null,
    getComedyMovie: null,
    getActionMovie: null,
    getHorrorMovie: null,
    getRomanceMovie: null,
    getDocumentMovie: null,
    setMovieDetail: null,
    getTrendingMovie: null,
    SearchMovie: null,
};

const reducerMovie = (state = initState, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.GET_POPULARITY_RANKING:
            return {
                ...state,
                getPopularityRanking: payload,
            };
        case types.GET_TOP_RATED_MOVIE:
            return {
                ...state,
                getTopRatedMovie: payload,
            };
        case types.GET_ACTION_MOVIE:
            return {
                ...state,
                getActionMovie: payload,
            };
        case types.GET_HORROR_MOVIE:
            return {
                ...state,
                getHorrorMovie: payload,
            };
        case types.GET_COMEDY_MOVIE:
            return {
                ...state,
                getComedyMovie: payload,
            };
        case types.GET_ROMANCE_MOVIE:
            return {
                ...state,
                getRomanceMovie: payload,
            };
        case types.GET_DOCUMENT_MOVIE:
            return {
                ...state,
                getDocumentMovie: payload,
            };

        case types.SET_MOVIE_DETAIL:
            return {
                ...state,
                setMovieDetail: payload,
            };

        case types.GET_TRENDING_MOVIE:
            return {
                ...state,
                getTrendingMovie: payload,
            };

        case types.GET_SEARCH_MOVIES:
            return {
                ...state,
                SearchMovie: payload,
            };

        default:
            return state;
    }
};

export default reducerMovie;
