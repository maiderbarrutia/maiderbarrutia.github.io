import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.scss';

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

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className={styles["projects__card"]}>
      <img src={project.image} alt={project.title} className={styles['projects__card-image']}/>
      <div className={styles["projects__card-info"]}>
        <h3 className={styles['projects__card-title']}>{project.title}</h3>
        <p className={styles['projects__card-year']}>{project.year}</p>
        <Link to={`/proyectos/${project.slug}-${project.id}`} className={styles["projects__card-link"]}>Ver más</Link>
      </div>
    </article>
  );
};

export default ProjectCard;
