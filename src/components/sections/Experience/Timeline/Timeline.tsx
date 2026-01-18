import React, { useState, useEffect, useRef } from 'react';
import styles from './Timeline.module.scss';
import CategoryNav from '@components/common/CategoryNav/CategoryNav';
// import { getAssetSrc } from '@/utils/srcUtils'; 
import Expandable from '@/components/common/Expandable/Expandable'; 
import experienceData from '@data/experienceData.json';

// Define la estructura de un elemento de experiencia o educación
interface TimelineItem {
  title: string;
  date: string;
  company: string;
  tasks?: string[];
  imageUrl: string;
  tools?: string[];
}

// Define la estructura de la respuesta del JSON
interface ExperienceData {
  experience: TimelineItem[][];
  education: TimelineItem[][];
}

// Categorías
const CATEGORY_MAP: { [key: string]: string } = {
  experience: 'Experiencia',
  education: 'Educación'
};

const CATEGORIES = Object.keys(CATEGORY_MAP);

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
    const data = experienceData as ExperienceData;
    const filteredItems = data[selectedCategory as keyof ExperienceData]?.flat() || [];
    setTimelineData(filteredItems);
  }, [selectedCategory]);

  return (
    <div className={styles['timeline__container']}>
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
            className={`${styles['timeline__item']} ${index % 2 === 0 ? styles['left'] : styles['right']}`}
          >
            <div className={styles['timeline__circle']}>
              {/* <img src={getAssetSrc(item.imageUrl)} alt={`${item.title} image`} /> */}
              <div className={styles['circle']}></div>
            </div>
            <div className={styles['timeline__content']}>
              <h2 className={styles['timeline__title']} dangerouslySetInnerHTML={{ __html: item.title }}></h2>
              <h3 className={styles['timeline__company']} dangerouslySetInnerHTML={{ __html: item.company }}></h3>
              <div className={styles['timeline__date']}>{item.date}</div>
              {item.tasks && item.tasks.length > 0 && (
                <Expandable content={item.tasks} />
              )}

              
              {/* <ul className={styles['timeline__tools-list']}>
                {Array.isArray(item.tools) && item.tools.length > 0 && (
                  item.tools.map((tool) => (
                    <li key={tool} className={styles['timeline__tool']}>
                      <div
                        title={tool}
                        className={styles['timeline__tool-icon']}
                        style={{ backgroundImage: `url(${getAssetSrc(`icons/tools/${tool.toLowerCase().replace(/\s/g, '-')}-icon.png`)})` }}
                      />
                    </li>
                  ))
                )}
              </ul> */}
            </div>
          </div>
        ))}
      </div>
      <div ref={containerRef} />
    </div>
  );
};

export default Timeline;
