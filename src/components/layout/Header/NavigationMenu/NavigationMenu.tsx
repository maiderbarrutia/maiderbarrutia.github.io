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
                <a className={`${styles['header__mainMenu-link']} ${selectedLink === '#home' ? styles['header__mainMenu-link--selected'] : ''}`} onClick={() => handleClick('#home')}>
                    Home
                </a>
            </li>
            <li>
                <a className={`${styles['header__mainMenu-link']} ${selectedLink === '#about' ? styles['header__mainMenu-link--selected'] : ''}`} onClick={() => handleClick('#about')}>
                    About
                </a>
            </li>
            <li>
                <a className={`${styles['header__mainMenu-link']} ${selectedLink === '#projects' ? styles['header__mainMenu-link--selected'] : ''}`} onClick={() => handleClick('#projects')}>
                    Projects
                </a>
            </li>
            <li>
                <a className={`${styles['header__mainMenu-link']} ${selectedLink === '#experience' ? styles['header__mainMenu-link--selected'] : ''}`} onClick={() => handleClick('#experience')}>
                    Experience
                </a>
            </li>
            <li>
                <a className={`${styles['header__mainMenu-link']} ${selectedLink === '#contact' ? styles['header__mainMenu-link--selected'] : ''}`} onClick={() => handleClick('#contact')}>
                    Contact
                </a>
            </li>
        </ul>
    );
};

export default NavigationMenu;
