import MovieRow from './movieRow';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as ACTIONS from '../../store/action/action';
import Library from '../Library/index';

function Content(props) {
    const dispatch = useDispatch();
    const {
        getPopularityRanking,
        getTopRatedMovie,
        getHorrorMovie,
        getActionMovie,
        getComedyMovie,
        getDocumentMovie,
        getRomanceMovie,
    } = useSelector((state) => state.infoMovies);
    useEffect(() => {
        dispatch(ACTIONS.getPopularityRanking());
        dispatch(ACTIONS.getTopRatedMovie());
        dispatch(ACTIONS.getHorrorMovie());
        dispatch(ACTIONS.getActionMovie());
        dispatch(ACTIONS.getComedyMovie());
        dispatch(ACTIONS.getDocumentMovie());
        dispatch(ACTIONS.getRomanceMovie());
    }, [dispatch]);

    return (
        <div>
            <MovieRow
                movies={getPopularityRanking}
                isNetflix={true}
                title="Popularity Ranking"
                idSections="popularityRanking"
            />
            <Library />

            <MovieRow movies={getTopRatedMovie} isNetflix={true} title="Top Rated Movies" idSections="topRated" />

            <MovieRow movies={getActionMovie} isNetflix={true} title="Action Movies" idSections="action" />
            <Library />

            <MovieRow movies={getComedyMovie} isNetflix={true} title="Comedy Movies" idSections="comedy" />
            <MovieRow movies={getHorrorMovie} isNetflix={true} title="Horror Movie" idSections="horror" />
            <Library />

            <MovieRow movies={getRomanceMovie} isNetflix={true} title="Romance Movies" idSections="romance" />
            <MovieRow movies={getDocumentMovie} isNetflix={true} title="Documentaries Movies" idSections="document" />
        </div>
    );
}

export default Content;
