import styles from './MovieRow.module.scss';
import { SmoothScroll } from '../../Utils';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { setMovieDetail } from '../../store/action/action';
const listImages = [
    'https://image.tmdb.org/t/p/original/xHLwNxk7Kgpatru7advnbnBGtgf.jpg',
    'https://image.tmdb.org/t/p/original/xHLwNxk7Kgpatru7advnbnBGtgf.jpg',
    'https://image.tmdb.org/t/p/original/xHLwNxk7Kgpatru7advnbnBGtgf.jpg',
    'https://image.tmdb.org/t/p/original/xHLwNxk7Kgpatru7advnbnBGtgf.jpg',
    'https://image.tmdb.org/t/p/original/xHLwNxk7Kgpatru7advnbnBGtgf.jpg',
    'https://image.tmdb.org/t/p/original/xHLwNxk7Kgpatru7advnbnBGtgf.jpg',
    'https://image.tmdb.org/t/p/original/xHLwNxk7Kgpatru7advnbnBGtgf.jpg',
    'https://image.tmdb.org/t/p/original/xHLwNxk7Kgpatru7advnbnBGtgf.jpg',
    'https://image.tmdb.org/t/p/original/xHLwNxk7Kgpatru7advnbnBGtgf.jpg',
];

function MovieRow(props) {
    const { movies, isNetflix, title, idSections } = props;

    const listMoviesRef = useRef();
    const movieRef = useRef();
    const dispatch = useDispatch();

    const handleSetMovie = (movie) => {
        dispatch(setMovieDetail(movie));
    };

    const handleScrollRight = () => {
        const maxScrollLeft = listMoviesRef.current.scrollWidth - listMoviesRef.current.clientWidth;
        if (listMoviesRef.current.scrollLeft < maxScrollLeft) {
            SmoothScroll(
                listMoviesRef.current,
                250,
                movieRef.current.scrollWidth * 2,
                listMoviesRef.current.scrollLeft,
            );
        }
    };
    const handleScrollLeft = () => {
        if (listMoviesRef.current.scrollLeft > 0) {
            SmoothScroll(
                listMoviesRef.current,
                250,
                -movieRef.current.scrollWidth * 2,
                listMoviesRef.current.scrollLeft,
            );
        }
    };
    return (
        <div className={styles.wrapper} id={idSections}>
            <h1 className={styles.heading}> {title}</h1>
            <div className={styles.listMovies} ref={listMoviesRef}>
                {movies &&
                    movies.length > 0 &&
                    movies.map((movie, index) => {
                        if (movie.poster_path && movie.backdrop_path !== null) {
                            let imageUrl = isNetflix
                                ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                                : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
                            return (
                                <div
                                    className={styles.movieItem}
                                    key={index}
                                    ref={movieRef}
                                    onClick={() => {
                                        handleSetMovie(movie);
                                    }}
                                >
                                    <img className={styles.movieImg} src={imageUrl} alt="" />
                                    <span className={styles.movieName}>{movie.title || movie.name}</span>
                                </div>
                            );
                        }
                    })}
            </div>
            <div className={styles.btnLeft} onClick={handleScrollLeft}>
                <FiChevronLeft />
            </div>
            <div className={styles.btnRight} onClick={handleScrollRight}>
                <FiChevronRight />
            </div>
        </div>
    );
}

export default MovieRow;
