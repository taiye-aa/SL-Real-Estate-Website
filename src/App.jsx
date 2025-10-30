import { useState } from 'react'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import './App.css'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  

  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
      <Projects />
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
