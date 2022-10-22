import React from 'react';
import styles from './Header.module.scss';
import Sidebar from '../Sidebar';
import logo from '../../../assets/images/logo.png';
import { useScrollY } from '../../Hooks/useScrollY';
import { BsPersonCircle } from 'react-icons/bs';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const showNavbar = useScrollY();
    const [keywords, setKeywords] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        let keywords = e.target.value;
        setKeywords(keywords);
        keywords.length > 0 ? navigate(`./search?keywords=${keywords.trim()}`) : navigate('/');
    };

    const goHome = () => {
        navigate('/');
        setKeywords('');
    };
    return (
        <div className={styles.wrapper} style={showNavbar ? { background: 'black' } : { background: 'transparent' }}>
            <div className={styles.inner}>
                <div className={styles.logo} onClick={goHome}>
                    <img className={styles.logoImg} src={logo} alt="" />
                </div>
                <div className={styles.nav}>
                    <Sidebar />
                </div>
                <div className={styles.profile}>
                    <div className={styles.profileWrapper}>
                        <div className={styles.search}>
                            <input
                                onChange={handleChange}
                                value={keywords}
                                type="text"
                                placeholder="keywords...."
                            ></input>
                        </div>
                        <div className={styles.iconPerson}>
                            <BsPersonCircle />

                            <div className={styles.register}>
                                Login to watch trendy content
                                <button className={styles.btn}>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
