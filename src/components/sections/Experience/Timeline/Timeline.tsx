import React, { useState, useEffect, useRef } from 'react';
import styles from './Timeline.module.scss';


interface TimelineItem {
    title: string;
    date: string;
    content: string;
    imageUrl: string; 
}

interface CustomTimelineProps {
  category: 'experience' | 'education';
}

const Timeline: React.FC<CustomTimelineProps> = ({ category }) => {
  const [timelineData, setTimelineData] = useState<TimelineItem[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    
    const loadTimelineData = async () => {
      try {
        
        const response = await fetch('/src/data/experienceData.json');
        const data = await response.json();

        
        const filteredItems = data[category].flat();
        setTimelineData(filteredItems);
      } catch (error) {
        console.error('Error cargando los datos del timeline:', error);
      }
    };

    loadTimelineData();
  }, [category]);

  return (
    <div className={styles['timeline-container']}>
      <div className={styles['timeline']}>
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`${styles['timeline-item']} ${index % 2 === 0 ? styles['left'] : styles['right']}`}
          >
            <div className={styles['circle']}>
              <img src={item.imageUrl} alt={`${item.title} image`} />
            </div>
            <div className={styles['content']}>
              <h2>{item.title}</h2>
              <h3>{item.date}</h3>
              <div dangerouslySetInnerHTML={{ __html: item.content }} />
            </div>
          </div>
        ))}
      </div>
      <div ref={containerRef} />
    </div>
  );
};

export default Timeline;