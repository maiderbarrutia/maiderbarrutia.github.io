import React from 'react';
import styles from './NavigationMenu.module.scss';

interface NavigationMenuProps {
    closeMenu: (link: string) => void;
    handleNavigateToSection: (link: string) => void;
    selectedLink: string;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ 
    closeMenu, 
    handleNavigateToSection, 
    selectedLink 
}) => {
    const handleClick = (link: string) => {
        handleNavigateToSection(link);
        closeMenu(link);
    };

    return (
        <ul className={styles.header__mainMenu}>
            <li>
                <a className={`${styles['header__mainMenu-link']} ${selectedLink === '#about' ? styles['header__mainMenu-link--selected'] : ''}`} onClick={() => handleClick('#about')}>
                    Sobre mi
                </a>
            </li>
            <li>
                <a className={`${styles['header__mainMenu-link']} ${selectedLink === '#projects' ? styles['header__mainMenu-link--selected'] : ''}`} onClick={() => handleClick('#projects')}>
                    Proyectos
                </a>
            </li>
            <li>
                <a className={`${styles['header__mainMenu-link']} ${selectedLink === '#experience' ? styles['header__mainMenu-link--selected'] : ''}`} onClick={() => handleClick('#experience')}>
                    Experiencia
                </a>
            </li>
            <li>
                <a className={`${styles['header__mainMenu-link']} ${selectedLink === '#contact' ? styles['header__mainMenu-link--selected'] : ''}`} onClick={() => handleClick('#contact')}>
                    Contacto
                </a>
            </li>
        </ul>
    );
};

export default NavigationMenu;
