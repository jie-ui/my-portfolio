import { NavLink } from "react-router-dom";
import styles from "./Services.module.css";

const services = [
  {
    key: "web",
    title: "Web Development",
    desc: "Built responsive and maintainable web pages and components using React and CSS Modules",
    img: "/web-development.png",     
    delay: 0                   
  },
  {
    key: "fullstack",
    title: "Full-Stack",
    desc: "Experienced with Node.js/Express and SQL for implementing CRUD operations, deploying applications, and building small-scale backend APIs.",
    img: "/stack.png",
    delay: 0.1
  },
  {
    key: "mobile",
    title: "Mobile-friendly",
    desc: "Designed mobile-first layouts with optimized touch interactions and performance improvements。",
    img: "/mobile-friendly.png",
    delay: 0.2
  },
 
];

export default function Services() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* title */}
        <h1 className={`${styles.title} ${styles.fadeInUp}`} style={{animationDelay: "0s"}}>
          Services
        </h1>
        <p className={`${styles.subtitle} ${styles.fadeInUp}`} style={{animationDelay: ".15s"}}>
          Below are the services I offer, each with a short description and icon. For more details, please don’t hesitate to get in touch.
        </p>

        {/* services card */}
        <div className={styles.grid}>
          {services.map(s => (
            <article
              key={s.key}
              className={`${styles.card} ${styles.fadeInUp}`}
              style={{ animationDelay: `${0.25 + s.delay}s` }}
            >
              <div className={styles.iconBox}>
                <img src={s.img} alt={s.title} />
              </div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className={`${styles.cta} ${styles.fadeInUp}`} style={{animationDelay: ".9s"}}>
          <NavLink to="/contact" className={styles.btn}>
            Contact Me
          </NavLink>
        </div>
      </div>
    </section>
  );
}
