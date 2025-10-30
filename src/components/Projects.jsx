import React from 'react'
import {assets} from '../assets/assets'
import { projectsData } from '../assets/assets'
import {motion} from 'framer-motion'

const Projects = () => {
    const[projects, setProjects]= React.useState(projectsData);
    const[currentIndex, setCurrentIndex]= React.useState(0);
    const[cardsToShow, setCardsToShow]= React.useState(1);

    React.useEffect(()=>{
        const updateCardsToShow =()=>{
            if(window.innerWidth >=1024){
                setCardsToShow(projects.length);
            }
            else{
                setCardsToShow(1);
            }
        }
            updateCardsToShow();
            window.addEventListener('resize', updateCardsToShow);
            return()=>{
                window.removeEventListener('resize', updateCardsToShow);
            }
        
    
    },[]);
        
    const nextProject =()=>{
        setCurrentIndex((prevIndex)=> (prevIndex + 1) % projects.length)
    }
    const previousProject =()=>{
        setCurrentIndex((prevIndex)=> prevIndex===0?  projects.length - 1 : prevIndex -1)
    }
  return (
    <motion.div 
    initial={{opacity:0, x:-100}}
          transition={{duration:1}}
          whileInView={{opacity:1, x:0}}
          viewport={{once:true}}
    className=' container mx-auto py-4 w-full md:px-20 lg:px-32 my-20 pt-20 px-6 overflow-hidden' id="Projects">
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects <span className='underline underline-offset-4 decoration-1 under font-light'>Completed</span></h1>
        <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Crafting Spaces, Building Legacies-Explore Our Portfolio</p>
        <div className='flex justify-end items-center mb-8'>
            <button onClick={previousProject}>
                <img src={assets.left_arrow} alt="previous" className='p-3 bg-gray-200 rounded mr-2 cursor-pointer' aria-label="previous project"/>
            </button>
            <button onClick={nextProject}>
                <img src={assets.right_arrow} alt="next" className='p-3 bg-gray-200 rounded mr-2 cursor-pointer' aria-label="next project "/>
            </button>
        </div>
        
        <div  className='overflow-hidden'>
            <div className='flex gap-8 transition-transform duration-500 ease-in-out' style={{transform: `translateX(-${currentIndex * (100/ cardsToShow)}%)`}}>
                {projects.map((project, id)=>{
                    return(
                        <div key={id} className='relative shrink-0 w-full sm:w-1/4'>
                            <img src={project.image} alt={project.title} className='rounded w-full h-auto mb-14'/>
                            <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                                <div className='inline-block bg-white/50 backdrop-blur-lg w-3/4 px-4 py-2 shadow-md rounded'>
                                    <h2 className='text-xl font-semibold text-gray-800'>{project.title}</h2>
                                    <p className='text-gray-500 text-sm'>
                                        {project.price} <span> | </span> {project.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </motion.div>
  )
}

export default Projects