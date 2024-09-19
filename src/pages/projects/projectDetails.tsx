import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../../../public/data/projectsData.json';
import styles from './ProjectDetail.module.scss';
import NotFoundPage from '../notFound/NotFound';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description?: string;
  link?: string;
  slug: string;
}

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | undefined>(undefined);
  const [headerHeight, setHeaderHeight] = useState<number>(0);

  // Buscar el proyecto basado en el slug e id
  useEffect(() => {
    if (slug) {
      const idFromSlug = slug.split('-').pop();
      const foundProject = projectsData.find(project => project.id === parseInt(idFromSlug || '', 10));
      setProject(foundProject);
    }
  }, [slug]);

  // Ajustar el padding-top en función de la altura del header
  useEffect(() => {
    const updateHeaderHeight = () => {
      const headerElement = document.querySelector('#main-header') as HTMLElement;
      if (headerElement) {
        setHeaderHeight(headerElement.offsetHeight);
      }
    };

    updateHeaderHeight();

    window.addEventListener('resize', updateHeaderHeight);

    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, [slug]);

  if (!project) {
    return <NotFoundPage />;
  }

  return (
    <div className={styles.projectDetail} style={{ paddingTop: `${headerHeight}px` }}>
      <img src={project.image} alt={project.title} />
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectDetail;




