import { useState } from 'react';
import Masonry from 'react-masonry-css';
import styles from './Projects.module.scss'; 
import projectsData from '../../../data/projectsData.json';
import Button from '../../common/Button/Button';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

const categories = ['Todo', 'Diseño grafico', 'Desarrollo web frontend'];

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todo');
  const [visibleProjects, setVisibleProjects] = useState<number>(6); // Initial number of visible projects

  // Convert JSON to an array of type Project
  const projects: Project[] = projectsData;

  const filterProjects = (category: string) => {
    setSelectedCategory(category);
    setVisibleProjects(6);
  };

  const loadMoreProjects = () => {
    setVisibleProjects((prevVisible) => prevVisible + 6);
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
          columnClassName={styles["masonry-grid_column"]}
        >
          {filteredProjects.slice(0, visibleProjects).map((project) => (
            <article key={project.id} className={styles["project-card"]}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.category}</p>
            </article>
          ))}
        </Masonry>

        {visibleProjects < filteredProjects.length && (
          <Button text="Ver más" onClick={loadMoreProjects} />
        )}
      </div>
    </section>
  );
};

export default Projects;
