import { NavLink, useLocation } from 'react-router-dom'
import styles from './layout.module.css'

export default function Layout() {
 

  return (
    <>
    {/*Banner */}
      
      <header className={styles.topbar}>
        <div className={styles.row}>
          <img src="/v7.jpg" alt="Logo" className={styles.logo} />
        </div>
      </header>

     
      {/* NavBar */}
        <nav className={`${styles.row} ${styles.subbar}`}>
          <NavLink to="/">Home</NavLink>|
          <NavLink to="/about">About Me</NavLink>|
          <NavLink to="/projects">Projects</NavLink>|
             <NavLink to="/services" >Services</NavLink>|
          <NavLink to="/contact" >Contact Me</NavLink>|
        </nav>
      
    </>
  )
}
