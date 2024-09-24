import { ReactNode } from 'react';
import styles from './SectionHeader.module.scss';

interface SectionHeaderProps {
  title: string;
  text?: ReactNode;
  tag?: keyof JSX.IntrinsicElements;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, text, tag: Tag = 'h2'  }) => {
  return (
    <header className={styles['section__header']}>
      <Tag className={styles['section__header-title']}>{title}</Tag>
      <p className={styles['section__header-text']}>
        {text}
      </p>
    </header>
  );
};

export default SectionHeader;


