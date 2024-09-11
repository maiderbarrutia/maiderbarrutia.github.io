import { useState } from 'react';
import Masonry from 'react-masonry-css';
import styles from './Projects.module.scss'; 
import projectsData from '../../../data/projectsData.json';
import Button from '../../common/Button/Button';
import { Link } from 'react-router-dom';

// Definimos el tipo para los proyectos
interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
}

const categories = ['Todo', 'Diseño grafico', 'Desarrollo web frontend'];

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todo');
  const [visibleProjects, setVisibleProjects] = useState<number>(6);

  // Convertimos el JSON a un array de tipo Project
  const projects: Project[] = projectsData;

  const filterProjects = (category: string) => {
    setSelectedCategory(category);
    setVisibleProjects(6); // Reinicia el número de proyectos visibles
  };

  const loadMoreProjects = () => {
    if (visibleProjects < projectsData.length) {
      setVisibleProjects((prev) => prev + 6);
    }
  };

  const filteredProjects = selectedCategory === 'Todo'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles["projects-container"]}>
        <nav className={styles["projects-nav"]}>
          {categories.map((category) => (
            <button
              key={category}
              className={category === selectedCategory ? 'active' : ''}
              onClick={() => filterProjects(category)}
            >
              {category}
            </button>
          ))}
        </nav>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={styles["masonry-grid"]}
          columnClassName={styles["masonry-grid_column"]}>
          
          {filteredProjects.slice(0, visibleProjects).map((project) => (
            <article key={project.id} className={styles["project-card"]}>
              <img src={project.image} alt={project.title} />
              <div className={styles["project-card-info"]}>
                <h3>{project.title}</h3>
                <p>{project.category}</p>
                <Link to={`/projects/${project.id}`} className={styles["project-link"]}>Ver más</Link>
              </div>
            </article>
          ))}
        </Masonry>

        {visibleProjects < filteredProjects.length && (
          <Button text="Ver más" onClick={loadMoreProjects} className={styles.loadMoreButton}/>
        )}
      </div>
    </section>
  );
};

export default Projects;
