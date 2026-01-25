import styles from './Skills.module.scss'; 

const Skills: React.FC = () => {
    return (
      <div className={styles['skills']}>
        <ul className={styles['skills-list']}>
            <li>Creatividad</li>
            <li>Investigación técnica</li>
            <li>Resolución de problemas</li>
            <li>Autodidacta</li>
            <li>Adaptación rápida</li>
        </ul>
      </div>
    )
}
export default Skills