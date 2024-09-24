import styles from './Experience.module.scss'; 
import SectionHeader from '@components/common/SectionHeader/SectionHeader';
import ExperienceTimeline from './Timeline/Timeline';

const Experience: React.FC = () => {
    return (
      <section id="experience" className={`${styles['experience']} ${styles['home-section']}`}>
        
        <div className={styles['section__container']}>
          <SectionHeader
            title="Trayectoria profesional"
          />
          <ExperienceTimeline category="experience"/>
        </div>
        
      </section>
    )
}
export default Experience