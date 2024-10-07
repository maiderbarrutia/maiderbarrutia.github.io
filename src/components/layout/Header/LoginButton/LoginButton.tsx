import styles from './LoginButton.module.scss'; 
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import loginIcon from '@/assets/icons/login-icon.svg';
import logoutIcon from '@/assets/icons/logout-icon.svg';

const LoginButton: React.FC = () => {
    const navigate = useNavigate();
    const { isAuthenticated, logout, username } = useAuth();

    const handleLogin = () => {
        navigate('/login');
      };
    
      const handleLogout = () => {
        logout();
      };
  return (
    <div className={styles.loginButtons}>

        {isAuthenticated ? (
            <div className={styles.loginButtons__user}>
                <button className={styles.loginButtons__button} onClick={handleLogout}>
                    <img className={styles.loginButtons__img} src={logoutIcon} width='30' alt="Logout" title='Cerrar sesión' />
                </button>
                <span className={styles.loginButtons__username}>{username}</span>
             </div>
        ) : (
            <button className={styles.loginButtons__button} onClick={handleLogin}>
                <img className={styles.loginButtons__img} src={loginIcon} width='30' alt="Login" title='Iniciar sesión' />
            </button>
        )}
      
    </div>
  );
}

export default LoginButton;