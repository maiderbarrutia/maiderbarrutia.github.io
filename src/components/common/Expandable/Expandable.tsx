// ExpandableText.tsx
import React, { useState } from 'react';
import styles from './Expandable.module.scss';
import Button from '@components/common/Button/Button';

interface ExpandableProps {
  content: string | string[]; // acepta string o array
}

const Expandable: React.FC<ExpandableProps> = ({ content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Determina si hay contenido que mostrar
  const hasContent = Array.isArray(content) ? content.length > 0 : !!content;

  return (
    <div className={styles['expandable']}>
      {hasContent && (
        <>
          <div
            className={`${styles['expandable__content']} ${
              isExpanded ? styles['expandable--expanded'] : styles['expandable--collapsed']
            }`}
          >
            {Array.isArray(content) ? (
              <ul>
                {content.map((item, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: content }} />
            )}
          </div>

          <Button
            text={isExpanded ? 'Ver menos' : 'Ver más'}
            onClick={toggleExpand}
            className={styles['expandable__button']}
          />
        </>
      )}
    </div>
  );
};

export default Expandable;