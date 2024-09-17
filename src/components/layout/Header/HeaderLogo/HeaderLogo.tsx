import { useNavigate, useLocation } from 'react-router-dom';
import styles from './HeaderLogo.module.scss';
import maiIcon from '/assets/icons/mai-icon.svg';

const HeaderLogo: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleHomeNavigation = () => {
        if (location.pathname !== '/') {
            navigate('/');
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className={styles.header__logo}>
            <a className={styles['header__logo-link']} onClick={handleHomeNavigation} style={{ cursor: 'pointer' }}>
                <img src={maiIcon} height="60" width="58.79" alt="icono Mai" />
                <p className={styles['header__logo-text']}>maiWeb</p>
            </a>
        </div>
    );
};

export default HeaderLogo;
