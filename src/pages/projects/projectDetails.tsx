import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../../data/projectsData.json';
import styles from './ProjectDetail.module.scss';
import NotFoundPage from '../notFound/NotFound';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description?: string;
  link?: string;
}

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | undefined>(undefined);

  useEffect(() => {
    const foundProject = projectsData.find(project => project.id === parseInt(id || '', 10));
    setProject(foundProject);
  }, [id]);

  if (!project) {
    return <NotFoundPage/>;
  }

  return (
    <div className={styles.projectDetail}>
      <img src={project.image} alt={project.title}/>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectDetail;

