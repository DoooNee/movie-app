import styles from './MovieDetail.module.scss';
import { setMovieDetail } from '../../store/action/action';
import { useDispatch } from 'react-redux';

function MoviesDetail(props) {
    const { movie, ShowModal } = props;

    const dispatch = useDispatch();

    const handleCloseBackdrop = () => {
        dispatch(setMovieDetail(null));
    };

    return (
        <div className={styles.wrapper}>
            <div
                className={`${styles.backdrop} ${ShowModal ? `${styles.showBackdrop}` : `${styles.hideBackdrop}`}`}
                onClick={handleCloseBackdrop}
            ></div>

            <div
                className={`${styles.modal} ${ShowModal ? `${styles.showModal}` : `${styles.hideModal}`}`}
                style={
                    movie
                        ? {
                              backgroundImage: `url(https://image.tmdb.org/t/p/original/${
                                  movie.backdrop_path || movie.poster_path
                              } )`,
                              backgroundSize: 'cover',
                          }
                        : {}
                }
            >
                <div className={styles.container}>
                    <div className={styles.movieInfo}>
                        <h1 className={styles.movieTitle}>{movie && (movie.title || movie.name)}</h1>
                        <p className={styles.statistical}>
                            <span className={styles.rating}>Rating: {movie && movie.vote_average}</span>
                            <span className={styles.popularity}> Popularity: {movie && movie.popularity}</span>
                        </p>
                        <p className={styles.release}>Release date: {movie && movie.release_date}</p>
                        <p className={styles.overview}>{movie && movie.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoviesDetail;
