import { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import styles from './Projects.module.scss'; 
import Button from '@components/common/Button/Button';
import ProjectCard from './ProjectCard/ProjectCard';
import CategoryNav from '@components/common/CategoryNav/CategoryNav';
import SectionHeader from '@components/common/SectionHeader/SectionHeader';

interface Project {
  id: number;
  title: string;
  category: string;
  mainImage: string;
  year: number;
  link: string;
  slug: string;
}

const CATEGORY_MAP: { [key: string]: string } = {
  'all': 'Todo',
  'graphic-design': 'Diseño gráfico',
  'web-design': 'Diseño web',
  'web-development': 'Desarrollo web'
};

const CATEGORIES = Object.keys(CATEGORY_MAP);

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [visibleProjects, setVisibleProjects] = useState<number>(6);
  const [projects, setProjects] = useState<Project[]>([]); // State for projects

  useEffect(() => {
    const loadProjectsData = async () => {
      try {
        const response = await fetch('/data/projectsData.json');
        if (!response.ok) {
          throw new Error('Error en la respuesta al cargar los proyectos');
        }
        const data: Project[] = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error cargando los datos de proyectos:', error);
      }
    };

    loadProjectsData();
  }, []);

  const filterProjects = (category: string) => {
    setSelectedCategory(category);
    setVisibleProjects(6);
  };

  const loadMoreProjects = () => {
    if (visibleProjects < filteredProjects.length) {
      setVisibleProjects(prev => prev + 6);
    }
  };

  const filteredProjects = selectedCategory === 'all'
  ? projects
  : projects.filter(project => 
      project.category === selectedCategory || 
      project.category === CATEGORY_MAP[selectedCategory]
    );

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <section id="projects" className={`${styles['projects']} ${styles['home-section']}`}>
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
          categories={CATEGORIES.map(cat => CATEGORY_MAP[cat])} 
          selectedCategory={CATEGORY_MAP[selectedCategory]} 
          onCategoryClick={(category) => filterProjects(Object.keys(CATEGORY_MAP).find(key => CATEGORY_MAP[key] === category) || '')} 
          className='projectsCategory'
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
