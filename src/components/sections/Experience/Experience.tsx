import styles from './Experience.module.scss'; 
import SectionHeader from '../SectionHeader/SectionHeader';
import ExperienceTimeline from './Timeline/Timeline';

const Experience: React.FC = () => {
    return (
      <section id="experience" className={styles.experience}>
        
        <div className={styles['section__container']}>
          <SectionHeader
            title="Experience"
          />
          <ExperienceTimeline category="experience"/>
        </div>
        
      </section>
    )
}
export default Experience