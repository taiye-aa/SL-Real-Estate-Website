import React from 'react'
import {assets} from '../assets/assets'
const Navbar =()=>{
    const[showMenu, setShowMenu] = React.useState(false);

    React.useEffect(()=>{
        if(showMenu){
            document.body.style.overflow='hidden';
        }
        else{
            document.body.style.overflow ='auto';
        
        }
        return()=>{
            document.body.style.overflow='auto';
        }
    },[showMenu])
    return(
        <div className="absolute top-0 left-0 w-full z-10">
            <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
                <img src={assets.logo} alt="Logo" />
                <ul className="hidden md:flex gap-7 text-white ">
                    <a href="#Header" className="  hover:text-orange-500  transition-all duration-300 ease-in-out">Home</a>
                    <a href="#About" className=" hover:text-orange-500  transition-all duration-300 ease-in-out">About</a>
                    <a href="#Projects" className=" hover:text-orange-500  transition-all duration-300 ease-in-out">Projects</a>
                    <a href="#Testimonials" className=" hover:text-orange-500  transition-all duration-300 ease-in-out">Testimonials</a>
                    
                </ul>
                <button className="hidden md:block bg-white px-8 py-2 rounded-full cursor-pointer hover:bg-orange-500 hover:text-white transition-color duration-300 ease-in-out">Sign Up</button>
                <img src={assets.menu_icon} alt="" className='md:hidden w-7 cursor-pointer' onClick={()=>{
                    setShowMenu(prev=> !prev)
                }}/>
            </div>
            <div className={`md:hidden ${showMenu? 'fixed w-full': 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden text-white bg-white/10 backdrop-blur-sm transition-all`}>
                <div className='flex justify-end p-6 cursor-pointer'>
                    <img src={assets.cross_icon} className='w-6' alt="" onClick={()=>{
                    setShowMenu(prev=> !prev)
                }}/>
                </div>
                <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                    <a href="#Header" className='px-4 py-2 rounded-full inline-block' onClick={()=>{
                    setShowMenu(prev=> !prev)
                }}>Home</a>
                    <a href="#About" className='px-4 py-2 rounded-full inline-block' onClick={()=>{
                    setShowMenu(prev=> !prev)
                }}>About</a>
                    <a href="#Projects" className='px-4 py-2 rounded-full inline-block' onClick={()=>{
                    setShowMenu(prev=> !prev)
                }}>Projects</a>
                    <a href="#Testimonials" className='px-4 py-2 rounded-full inline-block' onClick={()=>{
                    setShowMenu(prev=> !prev)
                }}>Testimonials</a>
                </ul>
        </div>
        </div>
    )
}
export default Navbar