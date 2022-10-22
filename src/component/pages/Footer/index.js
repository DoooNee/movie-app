import styles from './Footer.module.scss';

function Footer() {
    return (
        <div className={styles.wrapper}>
            <img className={styles.logo} alt="" />
            <div className={styles.menus}>
                <div className={styles.menu}>
                    <a>About Flix</a>
                    <a>Contact Us</a>
                    <a>Term of services</a>
                    <a>About us</a>
                </div>
                <div className={styles.menu}>
                    <a>Live</a>
                    <a>FAQ</a>
                    <a>Premium</a>
                    <a href="">Pravacy policy</a>
                </div>
                <div className={styles.menu}>
                    <a>You must watch</a>
                    <a>Recent release</a>
                    <a>Top IMDB</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
