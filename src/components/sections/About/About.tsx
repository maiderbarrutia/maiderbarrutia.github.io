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
                Desarrolladora web frontend con más de <strong>6 años de experiencia</strong>, 
                especializada en la maquetación de sitios web <strong>responsive</strong> con <strong>html5</strong>, 
                <strong>css3</strong> y <strong>wordpress</strong>. Con amplios conocimientos en todo lo referido con el <strong>diseño gráfico</strong> y <strong>web</strong>. 
                Actualmente formándome en <strong>Javascript</strong> para ampliar mis conocimientos en el área del desarrollo web.
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