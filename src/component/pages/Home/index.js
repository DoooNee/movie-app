import styles from './Home.module.scss';
import { useState, useEffect } from 'react';
import Content from '../Content/index';
import MovieDetail from '../MovieDetail/movieDetail';
import { useSelector } from 'react-redux';
const listBackground = [
    {
        id: 1,
        name: 'Halloween Ends',
        vote_average: 7.7,
        backdrop_path: 'https://image.tmdb.org/t/p/original/aTovumsNlDjof7YVoU5nW2RHaYn.jpg',
        poster_path: 'https://image.tmdb.org/t/p/original/xHLwNxk7Kgpatru7advnbnBGtgf.jpg',
        overview:
            'Four years after the events of Halloween in 2018, Laurie has decided to liberate herself from fear and rage and embrace life. But when a young man is accused of killing a boy he was babysitting, it ignites a cascade of violence and terror that will force Laurie to finally confront the evil she can’t control, once and for all.',
    },
    {
        id: 2,
        name: 'The Lord of the Rings: The Rings of Power',
        vote_average: 7.7,
        backdrop_path: 'https://image.tmdb.org/t/p/original/1rO4xoCo4Z5WubK0OwdVll3DPYo.jpg',
        poster_path: 'https://image.tmdb.org/t/p/original/mYLOqiStMxDK3fYZFirgrMt8z5d.jpg',
        overview:
            'Beginning in a time of relative peace, we follow an ensemble cast of characters as they confront the re-emergence of evil to Middle-earth.',
    },
    {
        id: 3,
        name: 'The Curse of Bridge Hollow',
        vote_average: 7.1,
        backdrop_path: 'https://image.tmdb.org/t/p/original/cuAUhb0aYQ9PsdU7EN3L2p1d3Ox.jpg',
        poster_path: 'https://image.tmdb.org/t/p/original/t6P9l6tcVnWLS1ADUAfkUCGQhm0.jpg',
        overview:
            "A Halloween-hating dad reluctantly teams up with his teenage daughter when an evil spirit wreaks havoc by making their town's decorations come to life.",
    },
    {
        id: 4,
        name: 'Rosaline',
        vote_average: 7.6,
        backdrop_path: 'https://image.tmdb.org/t/p/original/s4ZEtO5Lo444WJ5lBVyYARAq08.jpg',
        poster_path: 'https://image.tmdb.org/t/p/original/jQHrbzVy6ptopxqUohV6PcmmVcY.jpg',
        overview:
            "Left heartbroken after Romeo begins to pursue her cousin Juliet, Rosaline schemes to foil the famous romance and win back her guy in this comedic twist of Shakespeare's Romeo and Juliet",
    },
];

function Home(props) {
    const moviesDetail = useSelector((state) => state.infoMovies.setMovieDetail);

    const [isShowMovieDetail, setIsShowMovieDetail] = useState(false);

    useEffect(() => {
        setIsShowMovieDetail(moviesDetail ? true : false);
    }, [moviesDetail]);

    //------------loadImages---------//
    var [img, setImg] = useState(0);

    useEffect(() => {
        const timeId = setTimeout(() => {
            if (img < listBackground.length - 1) {
                setImg(img + 1);
            } else {
                setImg((img = 0));
            }
        }, 4000);
        return () => {
            clearTimeout(timeId);
        };
    }, [img]);
    //-----------loadImages--------------//

    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={styles.fadeTop}></div>
                <div className={styles.fadeLeft}></div>
                <div className={styles.fadeBottom}></div>

                <img id="img" className={styles.backgroundImage} src={listBackground[img].backdrop_path} alt="" />
                <div className={styles.description}>
                    <div className={styles.intro}>
                        <div className={styles.title}>{listBackground[img].name}</div>
                        <div className={styles.introVote}>★{listBackground[img].vote_average}</div>
                        <div className={styles.introOverview}>{listBackground[img].overview}</div>
                    </div>
                    <div className={styles.descriptionPoster}>
                        <img className={styles.descriptionPosterItem} src={listBackground[img].poster_path} alt="" />
                    </div>
                </div>
            </div>
            <Content />
            <MovieDetail movie={moviesDetail} ShowModal={isShowMovieDetail} />
        </div>
    );
}

export default Home;
