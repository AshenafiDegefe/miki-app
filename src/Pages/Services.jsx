import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Services = () => {
  useEffect(()=>{
    Aos.init();
  }, [])
  return (
    <div>
        <Navbar />
        <div className='relative ml-[10%] mt-5 w-[80%] max-md:h-auto h-[500px] bg-green-400/50 border 
        rounded-xl p-4 flex max-md:flex-col flex-row'   data-aos='fade-up'
        data-aos-duration='1000'>
         <div className=' max-md:w-full w-[60%] '>
          <img className='w-full h-full rounded-lg drop-shadow-2xl' src="Images/services1.jpg" alt="Serivces1 image" />
         </div>
         <div className='max-md:w-full w-[40%] max-md:mt-[15px] mt-[100px]'>
          <p className='text-xl font-sans font-bold my-3 text-center'>Garden & Landscape Design</p>
          <p className='text-lg font-sans  font-semibold text-center'>Dream it, we create it!</p>
          <p className='text-center text-lg font-sans font-semibold'>Our experts design stunning landscapes and functional outdoor spaces to perfectly 
            complement your property.</p>
         </div>
        </div>  
        <div className='relative ml-[10%] mt-5 w-[80%] max-md:h-auto h-[500px] bg-green-400/50 border 
        rounded-xl p-4 flex max-md:flex-col flex-row'
         data-aos='fade-up'
         data-aos-duration='1000'>
         <div className=' max-md:w-full w-[40%] max-md:mb-[0px] mt-[5px]' 
         data-aos='fade-right'
         data-aos-duration='1000'>
          <p className='text-center text-xl font-sans font-extrabold my-3'>Lawn Care</p>
          <p className='text-center text-lg font-sans font-bold'>Keep your lawn lush and healthy year-round with our 
            comprehensive maintenance services</p>
            <p className='font-bold font-sans text-center text-lg'>including mowing, edging, and fertilization.</p>
         </div>
         <div className='max-md:w-full w-[60%] max-md:mt-[0px]' 
         data-aos='fade-left'
         data-aos-duration='1000'>
         <img className='w-full h-full rounded-lg drop-shadow-2xl' src="Images/services2.jpg" alt="Serivces2 image" />
         </div>
        </div>  
        <div className='relative ml-[10%] mt-5 w-[80%] max-md:h-auto h-[500px] bg-green-400/50 border 
        rounded-xl p-4 flex max-md:flex-col flex-row'
        data-aos='fade-up'
         data-aos-duration='1000'>
         <div className=' max-md:w-full w-[60%]' 
         data-aos='fade-right'
         data-aos-duration='1000'>
          <img className='w-full h-full rounded-lg drop-shadow-2xl' src="Images/services3.jpg" alt="Serivces3 image" />
         </div>
         <div className='max-md:w-full w-[40%] mt-10'
         data-aos='fade-left'
         data-aos-duration='1000'>
          <p className='text-center font-sans text-xl font-bold text-wrap'>Indoor & Outdoor Gardening</p>
          <p className='text-lg font-sans font-bold text-center text-wrap'>Bring life to your home or office with our
             expertise in plant selection</p>
             <p className='text-center text-lg font-sans font-bold text-wrap'> installation, and ongoing care both indoors and outdoors.</p>
         </div>
        </div>  
        <div className='relative ml-[10%] mt-5 w-[80%] max-md:h-auto h-[500px] bg-green-400/50 border 
        rounded-xl p-4 flex max-md:flex-col flex-row'
        data-aos='fade-up'
         data-aos-duration='1000'>
         <div className=' max-md:w-full w-[40%] my-10' 
         data-aos='fade-right'
         data-aos-duration='1000'>
          <p className='text-center font-sans text-xl font-bold text-wrap mb-2 '>Garden Input Supply</p>
          <p className='font-sans font-bold text-lg text-center text-wrap'>Find everything you need to cultivate your
             green haven!</p>
             <p className='font-bold text-center text-lg font-sans text-wrap'>We offer a wide variety of high-quality plants, 
              materials, and supplies.</p>
         </div>
         <div className='max-md:w-full w-[60%]' 
         data-aos='fade-left'
         data-aos-duration='1000'>
         <img className='w-full h-full rounded-lg drop-shadow-2xl' src="Images/services4.jpg" alt="Serivces4 image" />
         </div>
        </div>  
        <div className='relative ml-[10%] mt-5 w-[80%] max-md:h-auto h-[500px] bg-green-400/50 border 
        rounded-xl p-4 flex max-md:flex-col flex-row mb-[30px]'
        data-aos='fade-up'
         data-aos-duration='1000'>
         <div className=' max-md:w-full w-[60%]'
         data-aos='fade-right'
         data-aos-duration='1000'>
          <img className='w-full h-full rounded-lg drop-shadow-2xl' src="Images/services5.jpg" alt="Serivces5 image" />
         </div>
         <div className='max-md:w-full w-[40%] mt-10'
         data-aos='fade-left'
         data-aos-duration='1000'>
          <p className='text-center font-sans font-bold text-xl text-wrap mb-2'>Training & Consultancy</p>
          <p className='font-sans text-lg font-bold text-wrap text-center'> Empower yourself to become a plant pro!</p>
          <p className='text-center font-sans text-lg font-bold text-wrap'>We offer training sessions and consultations to equip you with 
            gardening knowledge and skills.</p>
         </div>
        </div>  
        <Footer />
    </div>
  )
}

export default Services
