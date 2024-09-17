import { useEffect } from 'react';
import styles from './CirclesBackground.module.scss'; // Importa el archivo de estilos

const CirclesBackground: React.FC = () => {
  useEffect(() => {
    const section = document.getElementById('circles-container');
    
    // Crear los círculos de forma aleatoria
    function createCircle() {
      const circle = document.createElement('div');
      const size = Math.random() * 400 + 10; // Tamaño aleatorio entre 10 y 60px
      const posX = Math.random() * section!.offsetWidth;
      const posY = Math.random() * section!.offsetHeight;

      circle.style.width = `${size}px`;
      circle.style.height = `${size}px`;
      circle.style.top = `${posY}px`;
      circle.style.left = `${posX}px`;
      circle.classList.add(styles.circle);

      section!.appendChild(circle);
    }

    // Crear muchos círculos
    for (let i = 0; i < 7; i++) {
      createCircle();
    }
  }, []);

  return <div id="circles-container" className={styles.circlesContainer}></div>;
};

export default CirclesBackground;