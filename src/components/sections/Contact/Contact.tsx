import styles from './Contact.module.scss'; 
import SectionHeader from '../SectionHeader/SectionHeader';
import ContactForm from './Form/Form';

const Contact: React.FC = () => {
    return (
      <section id="contact" className={`${styles['contact']} ${styles['home-section']}`}>
        <div className={styles['section__container']}>
          <SectionHeader
            title="Envíame un mensaje"
            text={
              <>
                ¿Tienes una pregunta o propuesta, o solo quieres saludar? Adelante escribe en el formulario o manda un mensaje por{' '}
                <a href="mailto:maiderbarrutia@hotmail.com" className={styles['contact__link']}>aquí</a>.
              </>
            }
          />

          <ContactForm/>

      </div>
        
      </section>
    )
}
export default Contact