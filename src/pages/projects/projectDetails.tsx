import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAssetSrc } from '@/utils/srcUtils';
import projectsData from '@data/projectsData.json';
import styles from './ProjectDetail.module.scss';
import NotFoundPage from '@pages/notFound/NotFound';
import useHeaderHeight from '@/hooks/useDynamicHeaderHeight';
import SectionHeader from '@components/common/SectionHeader/SectionHeader';
import Button from '@/components/common/Button/Button';
import Masonry from 'react-masonry-css';
import Popup from '@components/common/Popup/Popup';

interface Project {
  id: number;
  title: string;
  category: string;
  client: string;
  year: number;
  specialty: string;
  technologies: string[];
  images: string[];
  description?: string;
  link?: string;
  slug: string;
  url: string;
}

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | undefined>(undefined);
  const [isOpen, setIsOpen] = useState(false);
  const [initialImageIndex, setInitialImageIndex] = useState<number>(0); // Mantiene el índice de la imagen
  const headerHeight = useHeaderHeight();

  useEffect(() => {
    if (slug) {
      const idFromSlug = slug.split('-').pop();
      const foundProject = projectsData.find(project => project.id === parseInt(idFromSlug || '', 10));
      setProject(foundProject);
    }
  }, [slug]);

  if (!project) {
    return <NotFoundPage />;
  }

  const handleClick = () => {
    if (project.url) {
      window.open(project.url, '_blank');
    }
  };

  const handleImageClick = (index: number) => {
    setInitialImageIndex(index); // Configura el índice inicial de la imagen
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <div className={styles['project-detail']} style={{ paddingTop: `${headerHeight}px` }}>
      <div className={`${styles['container']} ${styles['project-detail__container']}`}>
        <SectionHeader title={project.title} text={project.description} tag='h1' />

        <ul className={styles['project-detail__info']}>
          {project.category && <li><strong>Categoria:</strong> {project.category}</li>}
          {project.specialty && <li><strong>Especialidad:</strong> {project.specialty}</li>}
          {project.client && <li><strong>Cliente:</strong> {project.client}</li>}
          {project.year && <li><strong>Año:</strong> {project.year}</li>}
          {project.technologies && project.technologies.length > 0 && (
            <li><strong>Tecnologías:</strong> {project.technologies.join(', ')}</li>
          )}
        </ul>

        {project.url && project.url.trim() !== '' && (
          <Button text="Enlace al proyecto" onClick={handleClick} className={styles['project-detail__button']} />
        )}

        {/* Masonry para imágenes */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={styles["project-detail__masonry-grid"]}
          columnClassName={styles["project-detail__masonry-grid-column"]}
        >
          {project.images.map((image, index) => (
            <div key={index} onClick={() => handleImageClick(index)}>
              <img src={getAssetSrc(image)} alt={`Imagen ${index + 1}`} className={styles.projectImage} />
            </div>
          ))}
        </Masonry>

        {/* Popup con slider para las imágenes */}
        {isOpen && (
          <Popup
            isOpen={isOpen}
            onClose={handleClose}
            images={project.images.map(getAssetSrc)} // Pasar todas las imágenes al Popup
            initialImageIndex={initialImageIndex} // Pasa el índice de la imagen seleccionada
          />
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
