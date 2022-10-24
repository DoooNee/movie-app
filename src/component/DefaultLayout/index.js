import React from 'react';
import styles from './DefaultLayout.module.scss';
import Header from '../pages/Header';
import Trending from '../pages/Trending';
import Search from '../pages/Search';
import Home from '../pages/Home';
import Footer from '../pages/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const DefaultLayout = (props) => {
    return (
        <div className={styles.wrapper}>
            <Router>
                <Header />
                <Routes>
                    <Route path="//movie-app" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/trending" element={<Trending />} />
                </Routes>

                <Footer />
            </Router>
        </div>
    );
};

export default DefaultLayout;
