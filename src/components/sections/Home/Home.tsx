import styles from './Home.module.scss'; 
import maiIcon from '../../../assets/icons/mai-icon.png'; 
import Lamp from '../../../assets/icons/lamp.png'; 
import Computer from '../../../assets/icons/computer.png'; 
import Mobile from '../../../assets/icons/mobile.png'; 
import cvIcon from '../../../assets/icons/cv-icon.svg'; 

const Home: React.FC = () => {
    return (
        <section id="home" className={styles.home}>


            <div className={styles['header-content']}>
                <div className={styles['header-content__info']}>
                    <div className={styles['header-content__info-intro']}>
                        <img src={maiIcon} alt="Mai icon" height="122.38" width="120" />
                        <p className={styles['header-content__info-text typing']}>
                            Hola! Mi nombre es <strong>Maider Barrutia</strong>
                        </p>
                    </div>
                    <div className={styles['header-content__illustration']}>
                        <img className={styles['lamp-illustration']} src={Lamp} alt="Lamp illustration" width="20" />
                        <img className={styles['computer-illustration']} src={Computer} alt="Computer illustration" width="20" />
                        <img className={styles['mobile-illustration']} src={Mobile} alt="Mobile illustration" width="20" />
                    </div>
                </div>

                <div className={styles['professional-profile']}>
                    <div className={styles['container']}>
                        <h1 className={styles['occupation']}>Desarrolladora web frontend</h1>
                        <div className={styles['cv-button']}>
                            <a href=""><img src={cvIcon} alt="Curriculum" height="35" width="35" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
