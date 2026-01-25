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
                Desarrolladora frontend con sólida experiencia en maquetación web responsive, creando interfaces web modernas, accesibles, optimizadas y visualmente atractivas.
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