import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import NavigationMenu from './NavigationMenu/NavigationMenu';
import SocialLinks from './SocialLinks/SocialLinks';
import styles from './Header.module.scss';
import menuIcon from '@/assets/icons/menu-icon.svg';

const Header: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const MOBILE_BREAKPOINT = 576;
    const [menu, setMenu] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < MOBILE_BREAKPOINT);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [selectedLink, setSelectedLink] = useState<string>('#home');
    const headerRef = useRef<HTMLElement | null>(null);
    const navRef = useRef<HTMLDivElement | null>(null);

    // Función para alternar el estado del menú en dispositivos móviles
    const toggleMenu = () => {
        if (isMobile) {
            setMenu(prevMenu => !prevMenu);
        }
    };

    // Función para cerrar el menú y actualizar el enlace seleccionado
    const closeMenu = (link: string) => {
        if (isMobile) {
            setMenu(false);
        }
        setSelectedLink(link);
    };


    // Función para actualizar el estado del dispositivo móvil en función del tamaño de la ventana
    const handleResize = () => {
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // Hook para manejar el evento de scroll y actualizar el estado de `isScrolled` y `selectedLink`
    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                const headerHeight = headerRef.current.offsetHeight;
                setIsScrolled(window.scrollY > headerHeight);

                const sections = ['#home', '#about', '#projects', '#experience', '#contact'];
                let currentLink = '#home';

                for (const section of sections) {
                    const element = document.querySelector(section) as HTMLElement;
                    if (element) {
                        const { top: elementTop, height: elementHeight } = element.getBoundingClientRect();
                        const scrollPosition = window.scrollY + window.innerHeight / 2;

                        if (scrollPosition >= elementTop + window.scrollY && scrollPosition < elementTop + elementHeight + window.scrollY) {
                            currentLink = section;
                            break;
                        }
                    }
                }

                setSelectedLink(currentLink);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Hook para actualizar la posición del menú de navegación en función del tamaño de la ventana
    useEffect(() => {
        const updateNavPosition = () => {
            if (headerRef.current && navRef.current) {
                const headerHeight = headerRef.current.offsetHeight;
                // navRef.current.style.paddingTop = `${headerHeight}px`;
                if (window.innerWidth < MOBILE_BREAKPOINT) {
                    navRef.current.style.paddingTop = `${headerHeight}px`;
                    navRef.current.style.top = '0';
                } else {
                    navRef.current.style.paddingTop = '0'; // Remueve el padding si es mayor a 992px
                }
            }
        };
        const handleResizeWithNavUpdate = () => {
            handleResize();  // Actualiza el estado de 'isMobile'
            updateNavPosition(); // Actualiza la posición del menú de navegación
        };

        updateNavPosition();
        window.addEventListener('resize', handleResizeWithNavUpdate);
        return () => {
            window.removeEventListener('resize', handleResizeWithNavUpdate);
        };
    }, [menu]);

    // Función para manejar la navegación a una sección específica
    const handleNavigateToSection = (link: string) => {
        // Redirige a la página de inicio si no estamos en ella
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: link } });
        } else {
            handleScrollToSection(link);
        }
        closeMenu(link);
    };

    // Función para desplazar la página hasta la sección especificada
    const handleScrollToSection = (link: string) => {
        const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0;
        const element = document.querySelector(link) as HTMLElement;

        if (element) {
            const topPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: link === '#home' ? 0 : topPosition - headerHeight,
                behavior: 'smooth',
            });
        }
    };

    // Hook para manejar la navegación y scroll al cambiar la ruta
    useEffect(() => {
        if (location.pathname === '/' && location.state?.scrollTo) {
            handleScrollToSection(location.state.scrollTo);
        } else if (location.pathname === '/') {
            // En caso de que la ubicación sea '/', desplazar al inicio
            handleScrollToSection('#home');
        }
    }, [location]);

    // Verifica si estamos en la página de inicio
    const isNotHomePage = location.pathname !== '/';

    return (
        <header id="main-header" className={`${styles.header} ${isScrolled ? styles['header--scrolled'] : ''} ${styles['header--fixed']} ${isNotHomePage ? styles['header--notHome'] : ''}`} ref={headerRef}>
            <div className={styles.header__container}>
            <HeaderLogo closeMenu={closeMenu}/>

            <div className={styles.header__menu}>
                <button onClick={toggleMenu} className={styles.header__button}>
                    <img src={menuIcon} height="16" width="16" alt="icono menú" />
                </button>

                
                <nav className={`${styles.header__nav} ${menu && isMobile ? styles['header__nav--active'] : ''}`} ref={navRef}>
                    <NavigationMenu closeMenu={closeMenu} handleNavigateToSection={handleNavigateToSection} selectedLink={selectedLink} />
                    
                </nav>
                <SocialLinks />
            </div>
            </div>
        </header>
    );
};

export default Header;