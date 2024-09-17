import { useState } from 'react';
import Masonry from 'react-masonry-css';
import styles from './Projects.module.scss'; 
import projectsData from '../../../data/projectsData.json';
import Button from '../../common/Button/Button';
import ProjectCard from './ProjectCard/ProjectCard';
import CategoryNav from './CategoryNav/CategoryNav';
import SectionHeader from '../SectionHeader/SectionHeader';

// Definimos el tipo para los proyectos aquí
interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  year: number;
  link: string;
  slug: string;
}

const categories = ['Todo', 'Diseño gráfico', 'Diseño web', 'Desarrollo web'];

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todo');
  const [visibleProjects, setVisibleProjects] = useState<number>(6);

  const projects: Project[] = projectsData;

  const filterProjects = (category: string) => {
    setSelectedCategory(category);
    setVisibleProjects(6);
  };

  const loadMoreProjects = () => {
    if (visibleProjects < projects.length) {
      setVisibleProjects(prev => prev + 6);
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
      <div className={styles['section__container']}>
        <SectionHeader
          title="Trabajos"
          text={
            <>
              Aquí se muestran algunos proyectos realizados por mí en los diferentes ámbitos que he abarcado a lo largo de mi carrera. Si desea ver más ejemplos de mi trabajo que los que se muestran en este sitio{' '}
              <a href="mailto:maiderbarrutia@hotmail.com" className={styles['projects__link']}>¡contácta!</a>
            </>
          }
        />

        <CategoryNav 
          categories={categories} 
          selectedCategory={selectedCategory} 
          onCategoryClick={filterProjects} 
        />

        {filteredProjects.length === 0 ? (
          <p className={styles["projects__no-projects-message"]}>No hay proyectos en esta categoría.</p>
        ) : (
          <>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className={styles["projects__masonry-grid"]}
              columnClassName={styles["projects__masonry-grid-column"]}
            >
              {filteredProjects.slice(0, visibleProjects).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </Masonry>

            {visibleProjects < filteredProjects.length && (
              <Button text="Ver más" onClick={loadMoreProjects} className={styles['projects__load-more-button']}/>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
