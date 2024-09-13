import styles from './Footer.module.scss'; 
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
    return (
      <footer className={styles.footer}>
        <p>© {currentYear} | Diseñado y codificado por Maider Barrutia | <a href="/politica-de-privacidad">POLÍTICA DE PRIVACIDAD</a></p>
      </footer>
    )
}
export default Footer