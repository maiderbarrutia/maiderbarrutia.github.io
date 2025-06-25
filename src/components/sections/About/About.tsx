import styles from './About.module.scss'; 
import Slider from './Slider/Slider'; 
import Skills from './Skills/Skills'; 
import SectionHeader from '@components/common/SectionHeader/SectionHeader';

const About: React.FC = () => {
  return (
    <section id="about" className={`${styles['about']} ${styles['home-section']}`}>
      <div className={`${styles['container']} ${styles['about__container']}`}>
        <div className={styles['about__intro']}>
        <SectionHeader
            title="Sobre mi"
            text={
              <>
                <strong>Desarrolladora web frontend</strong> con más de 6 años de experiencia, especializada en <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>JavaScript</strong> y <strong>WordPress</strong>, con conocimientos en <strong>diseño gráfico</strong> y <strong>web</strong>. Actualmente ampliando habilidades en <strong>programación</strong> y <strong>bases de datos</strong> para fortalecer mi perfil en el área del <strong>desarrollo web</strong>. 
                Responsable, meticulosa y proactiva, con capacidad de trabajo en equipo y enfoque en aprendizaje continuo para crecer profesionalmente.
              </>
            }
          />

          <Skills/>
        </div>

        <Slider/>
      </div>
      
      
        
    </section>
  )
}
export default About