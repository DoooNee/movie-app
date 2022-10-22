import LibraryItem from './LibraryItem';
import styles from './Index.module.scss';

function Library(props) {
    return (
        <div className={styles.wrapper}>
            <LibraryItem name="Popularity Ranking" to="popularityRanking" />
            <LibraryItem name="Top Rated Movies" to="topRated" />
            <LibraryItem name="Action Movies" to="action" />
            <LibraryItem name="Comedy Movies" to="comedy" />
            <LibraryItem name="Horror Movie" to="horror" />
            <LibraryItem name="Romance Movies" to="romance" />
            <LibraryItem name="Documentaries Movies" to="document" />
        </div>
    );
}

export default Library;
