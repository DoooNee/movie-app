import { Link } from 'react-scroll';
import styles from './Library.module.scss';

function Library(props) {
    const { name, to } = props;
    return (
        <div className={styles.wrapper}>
            <Link className={styles.subMenu} to={to} spy={true} smooth={true} offset={-50} activeClass="active">
                <span>{name}</span>
            </Link>
        </div>
    );
}

export default Library;
