import styles from './Home.module.scss'; 
function Home() {
    return (
        <section id="home" className={styles.home}>
            <h1>Home Page</h1>
            <p className={styles.text}>Get in touch with us!</p>
        </section>
      )
}
export default Home