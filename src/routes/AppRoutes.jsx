import { Routes, Route } from 'react-router-dom'
import Home     from '../components/Home/Home.jsx'
import About    from '../components/About/About.jsx'
import Projects from '../components/Projects/Projects.jsx'
import Services from '../components/Services/Services.jsx'
import Contact  from '../components/Contact/Contact.jsx'

export default function AppRoutes() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  )
}
