import React from 'react'
import {assets} from '../assets/assets'
import { testimonialsData } from '../assets/assets'
import {motion} from 'framer-motion'

const Testimonials = () => {
    const[testimonials, setTestimonials]= React.useState(testimonialsData);
  return (
    <motion.div 
    initial={{opacity:0, x:100}}
          transition={{duration:1}}
          whileInView={{opacity:1, x:0}}
          viewport={{once:true}}
    className='container mx-auto py-10 lg:px-32 w-full overflow-hidden ' id="Testimonials">
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer <span className='underline underline-offset-4 under  decoration-1 font-light'>Testimonials</span></h1>
        <p  className='text-center text-gray-500 mb-12 mx-auto max-w-80'>Real Stories form those who found Home with Us</p>
        <div className='flex wrap justify-center gap-8'>
           <div className='flex flex-col gap-5 sm:flex-row'>
                 {testimonials.map((testimonial, id)=>{
                return(
                    <div key={id} className=' max-w-[340px] shadow-xl bg-[#F5F5DC] rounded px-8 py-6 text-center'>
                        <img className='w-20 h-20 rounded-full mx-auto mb-4'src={testimonial.image} alt={testimonial.alt} />
                        <h2 className='text-lg sm:text-xl text-gray-700 font-medium'>{testimonial.name}</h2>
                        <p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>
                        <div className='flex justify-center gap-1 text-red-500 mb-4'>
                            {Array.from({length: testimonial.rating}, (item,index)=>(
                                <img key={index} src={assets.star_icon} alt='rating'/>
                            ))}
                        </div>
                        <p className='text-gray-600'>{testimonial.text}</p>
                    </div>
                )
            })}
           </div>
        </div>
    </motion.div>
  )
}

export default Testimonials