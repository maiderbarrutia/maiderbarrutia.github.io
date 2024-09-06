
import { useState, useEffect, useRef } from 'react';
import styles from './Header.module.scss';
import maiIcon from '/assets/icons/mai-icon.svg';
import githubIcon from '../../../assets/icons/github-icon.svg';
import linkedinIcon from '../../../assets/icons/linkedin-icon.svg';
import arrowDownIcon from '../../../assets/icons/arrow-down.svg';
import menuIcon from '../../../assets/icons/menu-icon.svg';
// import { Link } from 'react-router-dom';


const Header = () => {
    const [menu, setMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 480);
    const [isScrolled, setIsScrolled] = useState(false);
    const headerRef = useRef<HTMLElement | null>(null);
    const navRef = useRef<HTMLDivElement | null>(null);

    const toggleMenu = () => {
        if (isMobile) {
            setMenu(prevMenu => !prevMenu);
        }
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth < 480);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                const headerHeight = headerRef.current.offsetHeight;
                if (window.scrollY > headerHeight) {
                    setIsScrolled(true);
                } else {
                    setIsScrolled(false);
                }
            }
        };

        // Añadir el evento de scroll
        window.addEventListener('scroll', handleScroll);
        // Llamar a handleScroll al montar el componente
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const updateNavPosition = () => {
            if (headerRef.current && navRef.current) {
                const headerHeight = headerRef.current.offsetHeight;
                if (navRef.current) {
                    navRef.current.style.top = `${headerHeight}px`;
                }
            }
        };

        updateNavPosition();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [menu]);


    return (
        // <header className={styles.header}>
        //     <nav>
        //         {/* <ul>
        //             <li>
        //             <Link to="/">Home</Link>
        //             </li>
        //             <li>
        //             <Link to="/about">About</Link>
        //             </li>
        //             <li>
        //             <Link to="/projects">Projects</Link>
        //             </li>
        //             <li>
        //             <Link to="/contact">Contact</Link>
        //             </li>
        //         </ul> */}
        //         <ul>
        //             <li>
        //             <a href="#home">Home</a>
        //             </li>
        //             <li>
        //             <a href="#about">About</a>
        //             </li>
        //             <li>
        //             <a href="#projects">Projects</a>
        //             </li>
        //             <li>
        //             <a href="#contact">Contact</a>
        //             </li>
        //         </ul>
        //     </nav>
        // </header>

        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${styles.fixed}`} ref={headerRef}>
            <h1 className={styles.header_logo}>
                <a href="/" className={styles.header_logo_link}>
                    <img src={maiIcon} height="60" width="58.79" alt="icono Mai"/>
                    <p className={styles.header_logo_text}>maiWeb</p> 
                </a>
            </h1>

            <button 
                onClick={ toggleMenu }
                className={styles.header_button}>
                    <img src={menuIcon} height="16" width="16" alt="icono menu"/>
                
            </button>

            {/* <nav className={ `header_nav ${ menu ? 'isActive' : '' }` }> */}
            <nav className={`${styles.header_nav} ${menu && isMobile ? styles.isActive : ''}`} ref={navRef}>
                <ul className={styles.header_mainMenu}>
                    <li>
                        <a className={styles.header_mainMenu_link} href="#home">Home</a>
                    </li>
                    <li>
                        <a className={styles.header_mainMenu_link} href="#about">About</a>
                    </li>
                    <li>
                        <a className={styles.header_mainMenu_link} href="#projects">Projects</a>
                    </li>
                    <li>
                        <a className={styles.header_mainMenu_link} href="#contact">Contact</a>
                    </li>
                </ul>

                <ul className={styles.header_rrssMenu}>
                    <li>
                        <a href="https://es.linkedin.com/in/maiderbarrutiaunzueta" target="_blank">
                            <img src={linkedinIcon} height="30" width="30"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/maiderbarrutia" target="_blank">
                            <img src={githubIcon} height="30" width="30"/>
                        </a>
                    </li>
                </ul>
                {/* <div className={styles.header_languages}>
                    <div className={styles.header_selectedLanguage}>
                        <span></span>
                        <img src={arrowDownIcon} alt=""/>
                    </div>
                    <ul className={styles.header_languageList}>
                        <li className={styles.header_spanish}><a href="/">Es</a></li>
                        <li className={styles.header_english}><a href="./en">En</a></li>
                        <li className={styles.header_euskera}><a href="/">Eu</a></li>
                    </ul>
                </div> */}
            </nav>
        </header>
    )
}
export default Header