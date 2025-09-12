import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContainer}>

        {/* Left Photo */}
        <div className={styles.left}>
          <img src="/my_photo.png" alt="my_photo"
            className={`${styles.photo} ${styles.fadeInUp}`} />
        </div>

        {/* right Text */}
        <div className={styles.right}>
          <h2 className={`${styles.title} ${styles.fadeInUp}`}>
            Hi,👋 I’m Jie Yang
          </h2>
          <p className={`${styles.desc} ${styles.fadeInUp}`}>
            A Software Engineering Technology student passionate about full-stack development,
            with experience in C#, Java, JavaScript, SQL, and React.
          </p>
          <p className={`${styles.desc} ${styles.fadeInUp}`}>
            My goal is to build user-friendly applications and grow as a developer through projects and teamwork.
          </p>
          {/* resumeLink */}
          <div className={styles.icons}>

            <a
              href="https://drive.google.com/file/d/152MRMnAgAH0MN6A392vRzVI9radd5tpU/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resumeIcon}
            >
              <img src="/resume.png" alt="Resume" />
            </a>

            <a href="https://github.com/jie-ui" target="_blank" rel="noreferrer">
              <img src="/github.png" alt="GitHub" width="28" />
            </a>
            <a href="https://www.linkedin.com/in/jie-yang-9799b521a" target="_blank" rel="noreferrer">
              <img src="/linkedin.png" alt="LinkedIn" width="28" />
            </a>
            <a href="mailto:jyang239@my.centennialcollege.ca">
              <img src="/email.png" alt="Mail" width="28" />
            </a>


          </div>
        </div>
      </div>


      {/* Footer */}
      <footer className={`${styles.fadeInUp}`}>
        <p className={styles.copyRight}>© {new Date().getFullYear()} Jie Yang</p>
      </footer>
    </section>
  )
}
