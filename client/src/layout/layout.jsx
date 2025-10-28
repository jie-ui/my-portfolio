import { NavLink, useLocation, Outlet } from 'react-router-dom'
import styles from './layout.module.css'
import v7 from '@/assets/v7.jpg';

export default function Layout() {
  return (
    <>
      {/* Banner */}
      <header className={styles.topbar}>
        <div className={styles.row}>
          <img src={v7} alt="Logo" className={styles.logo} />
        </div>
      </header>

      {/* NavBar */}
      <nav className={`${styles.row} ${styles.subbar}`}>
        <NavLink to="/">Home</NavLink> |
        <NavLink to="/about">About Me</NavLink> |
        <NavLink to="/projects">Projects</NavLink> |
        <NavLink to="/services">Services</NavLink> |
        <NavLink to="/contact">Contact Me</NavLink>
      </nav>

      {/* Content area where page components render */}
      <div className={styles.content}>
        <Outlet />
      </div>
    </>
  )
}

