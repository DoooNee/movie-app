import styles from './Search.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getSearchMovies } from '../../store/action/action';
import { useEffect } from 'react';

const useQuery = () => new URLSearchParams(useLocation().search);
function Movies() {
    const dispatch = useDispatch();
    const { SearchMovie } = useSelector((state) => state.infoMovies);

    const keywords = useQuery().get('keywords');

    useEffect(() => {
        if (keywords) dispatch(getSearchMovies(keywords));
    }, [keywords, dispatch]);

    return (
        <div className={styles.wrapper}>
            {SearchMovie && SearchMovie.length > 0 ? (
                SearchMovie.map((movie, index) => {
                    if (movie.backdrop_path !== null && movie.media_type !== 'person') {
                        return (
                            <div className={styles.inner} key={index}>
                                <img
                                    className={styles.image}
                                    src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                                    alt=""
                                ></img>
                                <div className={styles.movieName}>{movie.title || movie.name}</div>
                            </div>
                        );
                    }
                })
            ) : (
                <div>
                    <h1 className={styles.notFound}>Not found</h1>
                </div>
            )}
        </div>
    );
}

export default Movies;
