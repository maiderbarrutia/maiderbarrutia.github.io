import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import styles from './CookiesBanner.module.scss';
import Button from '@components/common/Button/Button';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set('cookie_consent', 'accepted', { expires: 365 });
    setIsVisible(false);
  };

  const handleDecline = () => {
    Cookies.set('cookie_consent', 'declined', { expires: 365 });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles['cookie-banner']}>
      <p>
        Usamos cookies para mejorar tu experiencia en nuestro sitio web. 
        Puedes aceptar todas las cookies o rechazar algunas. Puedes leer las cookies {' '}
        <Link className={styles['cookie-banner__link']} to="/politica-de-cookies">aquí</Link>
      </p>
      <div className={styles['cookie-banner__buttons']}>
        <Button text="Aceptar cookies" hoverStyle="white" onClick={handleAccept} />
        <Button text="Rechazar cookies" hoverStyle="white" onClick={handleDecline} />
      </div>
      
      

    </div>
  );
};

export default CookieBanner;
