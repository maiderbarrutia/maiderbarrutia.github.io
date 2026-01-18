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
                <strong>Desarrolladora frontend</strong> con más de 6 años de experiencia creando interfaces web modernas, accesibles y optimizadas. 
                Experiencia combinando desarrollo y diseño para lograr soluciones digitales atractivas y funcionales.
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