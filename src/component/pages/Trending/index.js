import styles from './Trending.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as ACTIONS from '../../store/action/action';

//--------------

function Trending() {
    const dispatch = useDispatch();
    const { getTrendingMovie } = useSelector((state) => state.infoMovies);

    useEffect(() => {
        dispatch(ACTIONS.getTrendingMovie());
    }, [dispatch]);

    console.log(getTrendingMovie);
    return (
        <div className={styles.wrapper}>
            {getTrendingMovie &&
                getTrendingMovie.length > 0 &&
                getTrendingMovie.map((movie, index) => {
                    return (
                        <div className={styles.wrapper}>
                            <div className={styles.inner}>
                                <img
                                    className={styles.image}
                                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                    alt=""
                                />
                                <div className={styles.movieName}>{movie.title || movie.name}</div>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}

export default Trending;
