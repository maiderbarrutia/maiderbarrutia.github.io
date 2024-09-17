import { ReactNode } from 'react';
import styles from './SectionHeader.module.scss';

interface SectionHeaderProps {
  title: string;
  text?: ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, text }) => {
  return (
    <header className={styles['section__header']}>
      <h2 className={styles['section__header-title']}>{title}</h2>
      <p className={styles['section__header-text']}>
        {text}
      </p>
    </header>
  );
};

export default SectionHeader;


