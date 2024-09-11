import styles from './NotFound.module.scss';

const NotFound: React.FC = () => {

  return (
    <div className={styles.notFound}>
      <h1>Pagina no encontrada</h1>
      <p>Esta página no se encuentra</p>
    </div>
  );
};

export default NotFound;