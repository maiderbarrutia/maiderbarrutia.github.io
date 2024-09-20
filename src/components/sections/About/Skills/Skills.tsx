import styles from './Skills.module.scss'; 

const Skills: React.FC = () => {
    return (
      <div className={styles['skills']}>
        <ul className={styles['skills-list']}>
            <li>Creativa</li>
            <li>Autodidacta</li>
            <li>Curiosa</li>
            <li>Resolutiva</li>
        </ul>
      </div>
    )
}
export default Skills