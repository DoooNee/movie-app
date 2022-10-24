import React from 'react';
import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={styles.link}>
                    <Link to="/movie-app">HOME</Link>
                </div>
                <div className={styles.link}>
                    <Link to="/search">SEARCH</Link>
                </div>
                <div className={styles.link}>
                    <Link to="/trending">TRENDING</Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
