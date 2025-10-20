import styles from "./Projects.module.css";
import pokemon from '@/assets/pokemon.png';
import spa_website from '@/assets/spa_website.png';
import Game from '@/assets/Game.png';



const projects = [
  {
    key: "pokedex",
    title: "Pokédex App",
    desc: "A front-end React project that fetches data from the PokéAPI to display Pokémon cards, with the ability to add favorites and save them to localStorage",
    img: pokemon,
    tech: ["Javascipt", "API", "CSS"],
    demo: "https://jie-ui.github.io/pokemon-api-app/",
    code: "https://github.com/jie-ui/pokemon-api-app"
  },
  {
    key: "spa",
    title: "Spa Resort Website",
    desc: "A multi-page website project built with HTML, CSS, and JavaScript, showcasing a fictional spa and resort.",
    img: spa_website,
    tech: ["HTML", "Javascipt", "CSS"],
    demo: "https://jie-ui.github.io/spa-resort-website/",
    code: "https://github.com/jie-ui/spa-resort-website"
  },
  {
    key: "game",
    title: "Word Guessing Game",
    desc: "A word guessing game built with JavaScript, HTML, and CSS, featuring Classic and Time Attack modes. Players can guess letters using an on-screen keyboard, with lives tracking and dynamic UI updates",
    img: Game,
    tech: ["JavaScript", "HTML", "CSS"],
    demo: "https://jie-ui.github.io/Word_Game/",
    code: "https://jie-ui.github.io/Word_Game/"
  }
];

export default function Projects() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={`${styles.title} ${styles.fadeInUp}`} style={{ animationDelay: "0s" }}>
          Projects
        </h1>
        <p className={`${styles.subtitle} ${styles.fadeInUp}`} style={{ animationDelay: ".15s" }}>
          Here are some of the projects I have completed, showcasing different tech stacks and practical skills.
        </p>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <article
              key={p.key}
              className={`${styles.card} ${styles.fadeInUp}`}
              style={{ animationDelay: `${0.25 + i * 0.15}s` }}
            >
              <div className={styles.imageBox}>
                <img src={p.img} alt={p.title} />
              </div>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>
              <div className={styles.tech}>
                {p.tech.map((t, idx) => (
                  <span key={idx}>{t}</span>
                ))}
              </div>
              <div className={styles.links}>
                <a href={p.demo} target="_blank" rel="noreferrer" className={styles.btn}>
                  Live Demo
                </a>
                <a href={p.code} target="_blank" rel="noreferrer" className={styles.btnOutline}>
                  Source Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
