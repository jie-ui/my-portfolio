import { NavLink } from 'react-router-dom'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>

        {/* title */}
        <h2 className={styles.title}>Get In Touch ✨</h2>
        <p className={styles.desc}>
          Feel free to connect with me through these platforms,
          or send me a message directly!
        </p>

        <div className={styles.container}>
          <form
            className={styles.contactForm}
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message submitted!"); 
              window.location.href = "/"; 
            }}
          >
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="tel" name="phone" placeholder="Your Phone" required />
            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>

          {/* icon */}
          <div className={styles.icons}>
            <a href="https://github.com/jie-ui" target="_blank" rel="noreferrer">
              <img src="/github.png" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/jie-yang-9799b521a" target="_blank" rel="noreferrer">
              <img src="/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="mailto:jyang239@my.centennialcollege.ca">
              <img src="/email.png" alt="Mail" />
            </a>
          </div>
        </div>

      </div>

      {/* footer */}
      <footer>
        <p className={styles.copyRight}>
          © {new Date().getFullYear()} Jie Yang — Built with React
        </p>
      </footer>
    </section>
  )
}

