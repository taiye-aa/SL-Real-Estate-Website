import React from 'react'
import {assets} from '../assets/assets.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab);


const Footer = () => {
  return (
    <div className='pt-5 px-4 md:px-20 lg:px-32 bg-black w-full overflow-hidden' id="Footer">
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
              <img src={assets.logo} alt="" />
              <p className='text-gray-300 mt-4'>SL Real Estate: Building Communities, One Home at a Time.<br></br>
               Follow us: 
               </p>
               <div className='flex gap-2 mt-2'>
                <a href="#"><FontAwesomeIcon icon="fa-brands fa-x-twitter" className='text-gray-300 text-lg hover:text-orange-400 transition-all duration-300 ease'/></a>
               <a href="#"><FontAwesomeIcon icon="fa-brands fa-instagram" className='text-gray-300 text-lg hover:text-orange-400 transition-all duration-300 ease'/></a>
               <a href="#"><FontAwesomeIcon icon="fa-brands fa-linkedin" className='text-gray-300 text-lg hover:text-orange-400 transition-all duration-300 ease'/></a>
               </div>
            </div>
            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
              <h3 className='text-white text-lg font-bold mb-4'>
                Company
              </h3>
              <ul className='flex flex-col gap-2 text-gray-300'>
                <a className='hover:text-orange-400 transition-all duration-300 ease'  href="#Header">Home</a>
                <a className='hover:text-orange-400 transition-all duration-300 ease'  href="#About">About</a>
                <a className='hover:text-orange-400 transition-all duration-300 ease'  href="#Contact">Contact Us</a>
                <a className='hover:text-orange-400 transition-all duration-300 ease'  href="#">Privacy Policy</a>
              </ul>
            </div>
            <div className='w-full md:w-1/3'>
              <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newsletter</h3>
              <p className='text-gray-300 mb-4 max-w-80'>The latest news, articles and resources, sent to your inbox weekly</p>
              <div className='flex gap-2'>
                <input type="email"  placeholder='Enter your email' className='p-2 rounded bg-gray-800 text-gray-300  focus:outline-none w-full md:w-auto'/>
                <button className='py-2 px-4 rounded bg-orange-400 text-white cursor-pointer hover:bg-orange-500'>Subscribe</button>
              </div>
            </div>
        </div>
        <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
          © 2025 SL Real Estate. All rights reserved. | Privacy Policy | Terms of Use
        </div>
    </div>
  )
}

export default Footer