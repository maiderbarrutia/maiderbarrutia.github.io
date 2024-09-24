// ExpandableText.tsx
import React, { useState } from 'react';
import styles from './Expandable.module.scss';
import Button from '@components/common/Button/Button';

interface ExpandableProps {
  content: string;
}

const Expandable: React.FC<ExpandableProps> = ({ content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles['expandable']}>
      <div 
        className={`${styles['expandable__content']} ${isExpanded ? styles['expandable--expanded'] : styles['expandable--collapsed']}`}
        dangerouslySetInnerHTML={{ __html: content }} 
      />
    {content && (
      <Button text={isExpanded ? 'Ver menos' : 'Ver más'} onClick={toggleExpand} className={styles['expandable__button']}/>
    )}
    </div>
  );
};

export default Expandable;
