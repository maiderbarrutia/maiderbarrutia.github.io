import React, { useState, useEffect, useRef } from 'react';
import styles from './Timeline.module.scss';
import CategoryNav from '@components/common/CategoryNav/CategoryNav';
import { getAssetSrc } from '@/utils/srcUtils'; 


const CATEGORY_MAP: { [key: string]: string } = {
  'experience': 'Experiencia',
  'education': 'Educación'
};

const CATEGORIES = Object.keys(CATEGORY_MAP);

interface TimelineItem {
  title: string;
  date: string;
  content: string;
  imageUrl: string;
  tools: string[];
}

interface TimelineProps {
  category: string;
}

const Timeline: React.FC<TimelineProps> = ({ category }) => {
  const [timelineData, setTimelineData] = useState<TimelineItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>(category);
  const containerRef = useRef<HTMLDivElement>(null);

  const filterProjects = (category: string) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const loadTimelineData = async () => {
      try {
        const response = await fetch('/data/experienceData.json');
        if (!response.ok) {
          throw new Error('Error en la respuesta');
        }
        const data = await response.json();

        // Filtra los datos según la categoría seleccionada
        const filteredItems = data[selectedCategory]?.flat() || [];
        setTimelineData(filteredItems);
      } catch (error) {
        console.error('Error cargando los datos del timeline:', error);
      }
    };

    loadTimelineData();
  }, [selectedCategory]);

  return (
    <div className={styles['timeline-container']}>
      <CategoryNav 
        categories={CATEGORIES.map(cat => CATEGORY_MAP[cat])}
        selectedCategory={CATEGORY_MAP[selectedCategory]}
        onCategoryClick={(category) => filterProjects(Object.keys(CATEGORY_MAP).find(key => CATEGORY_MAP[key] === category) || '')} 
        className='experienceCategory'
        
      />
      <div className={styles['timeline']}>
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`${styles['timeline-item']} ${index % 2 === 0 ? styles['left'] : styles['right']}`}
          >
            <div className={styles['circle']}>
              <img src={getAssetSrc(item.imageUrl)} alt={`${item.title} image`} />
            </div>
            <div className={styles['content']}>
              <h2 className={styles['content__title']} dangerouslySetInnerHTML={{ __html: item.title }}></h2>
              <h3 className={styles['content__date']}>{item.date}</h3>
              <div className={styles['content__text']} dangerouslySetInnerHTML={{ __html: item.content }} />
              
              <ul className={styles['tools-list']}>
                {Array.isArray(item.tools) && item.tools.length > 0 && (
                  item.tools.map((tool) => (
                      <li key={tool} className={styles['tool']}>
                        <div
                          title={tool}
                          className={styles['tool-icon']}
                          style={{ backgroundImage: `url(${getAssetSrc(`icons/tools/${tool.toLowerCase().replace(/\s/g, '-')}-icon.png`)})` }}
                        />
                        {/* Descomentar si necesitas mostrar el nombre de la herramienta */}
                        {/* <div className={styles['tool-name']}>{tool}</div> */}
                      </li>
                    ))
                  )
                }
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div ref={containerRef} />
    </div>
  );
};

export default Timeline;