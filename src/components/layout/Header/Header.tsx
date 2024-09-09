
import { useState, useEffect, useRef } from 'react';
import styles from './Header.module.scss';
import maiIcon from '/assets/icons/mai-icon.svg';
import githubIcon from '../../../assets/icons/github-icon.svg';
import linkedinIcon from '../../../assets/icons/linkedin-icon.svg';
import menuIcon from '../../../assets/icons/menu-icon.svg';


const Header = () => {
    const [menu, setMenu] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 480);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [selectedLink, setSelectedLink] = useState<string>('#home');
    const headerRef = useRef<HTMLElement | null>(null);
    const navRef = useRef<HTMLDivElement | null>(null);

    const toggleMenu = () => {
        if (isMobile) {
            setMenu(prevMenu => !prevMenu);
        }
    };

    const closeMenu = (link:string) => {
        if (isMobile) {
            setMenu(false);
        }
        setSelectedLink(link);
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

        window.addEventListener('scroll', handleScroll);
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

            <nav className={`${styles.header_nav} ${menu && isMobile ? styles.isActive : ''}`} ref={navRef}>
                <ul className={styles.header_mainMenu}>
                    <li>
                        <a className={`${styles.header_mainMenu_link} ${selectedLink === '#home' ? styles.selected : ''}`} onClick={() => closeMenu('#home')} href="#home">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className={`${styles.header_mainMenu_link} ${selectedLink === '#about' ? styles.selected : ''}`} onClick={() => closeMenu('#about')} href="#about">
                            About
                        </a>
                    </li>
                    <li>
                        <a className={`${styles.header_mainMenu_link} ${selectedLink === '#projects' ? styles.selected : ''}`} onClick={() => closeMenu('#projects')}href="#projects">
                             Projects
                        </a>
                    </li>
                    <li>
                        <a className={`${styles.header_mainMenu_link} ${selectedLink === '#contact' ? styles.selected : ''}`} onClick={() => closeMenu('#contact')} href="#contact">
                            Contact
                        </a>
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
            </nav>
        </header>
    )
}
export default Header