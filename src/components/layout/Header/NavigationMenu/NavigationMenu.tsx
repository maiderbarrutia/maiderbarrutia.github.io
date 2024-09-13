import styles from './NavigationMenu.module.scss';

interface NavigationMenuProps {
    closeMenu: (link: string) => void;
    handleNavigateToSection: (link: string) => void;
    selectedLink: string;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ closeMenu, handleNavigateToSection, selectedLink }) => {
    const handleClick = (link: string) => {
        handleNavigateToSection(link);
        closeMenu(link);
    };

    return (
        <ul className={styles.header__mainMenu}>
            <li>
                <a className={`${styles['header__mainMenu-link']} ${selectedLink === '#home' ? styles['header__mainMenu-link--selected'] : ''}`} onClick={() => handleClick('#home')} style={{ cursor: 'pointer' }}>
                    Home
                </a>
            </li>
            <li>
                <a className={`${styles['header__mainMenu-link']} ${selectedLink === '#about' ? styles['header__mainMenu-link--selected'] : ''}`} onClick={() => handleClick('#about')} style={{ cursor: 'pointer' }}>
                    About
                </a>
            </li>
            <li>
                <a className={`${styles['header__mainMenu-link']} ${selectedLink === '#projects' ? styles['header__mainMenu-link--selected'] : ''}`} onClick={() => handleClick('#projects')} style={{ cursor: 'pointer' }}>
                    Projects
                </a>
            </li>
            <li>
                <a className={`${styles['header__mainMenu-link']} ${selectedLink === '#contact' ? styles['header__mainMenu-link--selected'] : ''}`} onClick={() => handleClick('#contact')} style={{ cursor: 'pointer' }}>
                    Contact
                </a>
            </li>
        </ul>
    );
};

export default NavigationMenu;
