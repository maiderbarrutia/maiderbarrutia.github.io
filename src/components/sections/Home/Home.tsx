import styles from './Home.module.scss'; 
// import maiIcon from '../../../assets/icons/mai-icon.png'; 
import Lamp from '../../../assets/icons/lamp.png'; 
import Computer from '../../../assets/icons/computer.png'; 
import Mobile from '../../../assets/icons/mobile.png'; 
import cvIcon from '../../../assets/icons/cv-icon.svg'; 
import CirclesBackground from './CirclesBackground/CirclesBackground';
// import AnimatedCharacter from './AnimatedCharacter/AnimatedCharacter';

const Home: React.FC = () => {

    const pdfUrl = '/src/assets/archives/cv-MaiderBarrutia.pdf';

    return (
        <section id="home" className={styles.home}>
            <CirclesBackground />

            <div className={styles['header-content']}>
                <div className={`${styles['container']} ${styles['header-content__info']}`}>
                    <div className={`${styles['header-content__info-intro']}`}>
                        {/* <img src={maiIcon} alt="Mai icon" height="120" width="122.38" className={styles['header-content__info-img']} /> */}
                        {/* <AnimatedCharacter/> */}
                        <p className={`${styles['header-content__info-text']} ${styles['typing']}`}>
                            Hola! Mi nombre es <strong>Maider Barrutia</strong>
                        </p>
                    </div>
                    <div className={styles['header-content__illustration']}>
                        {/* <img className={styles['lamp-illustration']} src={Lamp} alt="Lamp illustration" width="20" /> */}
                        <div className={styles['lamp-container']}>
                            <img src={Lamp} alt="Lamp illustration" className={styles['lamp-illustration']} />
                            <div className={styles['lamp-light']}></div>
                        </div>
                        <div className={styles['devices-container']}>
                            <img className={styles['computer-illustration']} src={Computer} alt="Computer illustration" width="20" />
                            <img className={styles['mobile-illustration']} src={Mobile} alt="Mobile illustration" width="20" />
                        </div>
                    </div>
                </div>

                <div className={styles['professional-profile']}>
                    <div className={`${styles['container']} ${styles['professional-profile__container']}`}>
                        <h1 className={styles['professional-profile__occupation']}>Desarrolladora web frontend</h1>
                        <div className={styles['cv-button']}>
                            <a href={pdfUrl} download="cv-MaiderBarrutia.pdf"><img src={cvIcon} title='Descargar Curriculum' alt="Curriculum" height="35" width="35" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
