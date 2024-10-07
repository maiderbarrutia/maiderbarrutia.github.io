import { useEffect } from 'react';
import styles from './CirclesBackground.module.scss';

const CirclesBackground: React.FC = () => {
  useEffect(() => {
    const section = document.getElementById('circles__container');
    
    function createCircle() {
      const circle = document.createElement('div');
      const size = Math.random() * 200 + 10;
      const posX = Math.random() * section!.offsetWidth;
      const posY = Math.random() * section!.offsetHeight;

      circle.style.width = `${size}px`;
      circle.style.height = `${size}px`;
      circle.style.top = `${posY}px`;
      circle.style.left = `${posX}px`;
      circle.classList.add(styles.circle);

      section!.appendChild(circle);
    }

    for (let i = 0; i < 7; i++) {
      createCircle();
    }
  }, []);

  return <div id="circles__container" className={styles.circlesContainer}></div>;
};

export default CirclesBackground;