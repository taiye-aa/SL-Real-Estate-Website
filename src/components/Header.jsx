import React from 'react'
import Navbar from './Navbar.jsx'
import {motion} from 'framer-motion'

const Header = () => {
  return (
    
    <div className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden bg-[url('/header_img.jpg')] bg-[rgba(0, 0, 0, 0.35)] "  id="Header">
        <Navbar />
        <motion.div
          initial={{opacity:0, y:100}}
          transition={{duration:1.5}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
        className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
            <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">Explore Homes that fit your dreams</h2>
            <div className="space-x-6 mt-16">
                <a href="#Projects" className="border border-white px-8 py-3 rounded hover:backdrop-blur-lg transition-all duration-300 ease-in-out">Projects</a>
                <a href="#Contact" className="border border-white px-8 py-3 rounded hover:backdrop-blur-lg transition-all duration-300 ease-in-out">Contact Us</a>
            </div>
        </motion.div>

        
    </div>
  )
}

export default Header