import styles from './PrivacyPolicy.module.scss';
import useHeaderHeight from '@/hooks/useDynamicHeaderHeight';

const PrivacyPolicy: React.FC = () => {
  const headerHeight = useHeaderHeight();

  return (
    <div className={styles.privacyPolicy} style={{ paddingTop: `${headerHeight}px` }}>
      <div className={styles.container}>
        <h1>Politica de privacidad</h1>

        <p>Fecha de entrada en vigor: 2024</p>

        <p>En este sitio web personal, Maider Barrutia, me comprometo a proteger tu privacidad. 
        Esta política explica cómo manejo la información que recopilamos cuando visitas mi sitio.</p>

        <h2>Información que Recopilo</h2>
        <p>Datos de contacto: Solo recopilo información que decides proporcionarme, como tu nombre y correo electrónico a través de formularios de contacto.</p>
        <p>Datos de uso: Puedo recoger información sobre cómo interactúas con mi sitio, como las páginas que visitas y el tiempo que pasas en ellas.</p>
        <p>Cookies: Utilizo cookies para mejorar tu experiencia en el sitio.</p>

        <h2>Uso de la Información</h2>

        <p>Utilizo la información recopilada para:</p>
        <ul>
          <li>Responder a tus preguntas y comentarios.</li>
          <li>Mejorar el contenido de mi sitio.</li>
          <li>Protección de la Información</li>
        </ul>



        <p>Tomaré medidas razonables para proteger tu información personal, 
          pero recuerda que ninguna transmisión de datos por Internet es completamente segura.</p>

        <h2>Compartir Información</h2>
        <p>No vendo ni comparto tu información personal con terceros, a menos que sea requerido por la ley.</p>

        <h2>Derechos del Usuario</h2>
        <p>Tienes derecho a acceder y corregir tu información personal. 
          Si deseas hacerlo, por favor contáctame a través del correo electrónico en el sitio.</p>

        <h2>Cambios a esta Política</h2>
        <p>Puedo actualizar esta política ocasionalmente. Te notificaré sobre cambios importantes.</p>

        <h2>Contacto</h2>
        <p>Si tienes preguntas sobre esta política, contáctame <a href="mailto:maiderbarrutia@hotmail.com" className={styles['privacy__link']}>aquí</a>.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;