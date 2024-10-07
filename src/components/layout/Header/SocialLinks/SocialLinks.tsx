import React from 'react';
import styles from './SocialLinks.module.scss';
import githubIcon from '@/assets/icons/github-icon.svg';
import linkedinIcon from '@/assets/icons/linkedin-icon.svg';

const SocialLinks: React.FC = () => {
    return (
        <ul className={styles.socialLinks}>
            <li>
                <a href="https://es.linkedin.com/in/maiderbarrutiaunzueta" target="_blank">
                    <img className={styles['socialLinks__img']} src={linkedinIcon} height="30" width="30" alt="LinkedIn" />
                </a>
            </li>
            <li>
                <a href="https://github.com/maiderbarrutia" target="_blank">
                    <img className={styles['socialLinks__img']} src={githubIcon} height="30" width="30" alt="GitHub" />
                </a>
            </li>
        </ul>
    );
};

export default SocialLinks;
