import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  useEffect(()=> {
    Aos.init();
  }, [])
  return (
    <div >
        <Navbar />
        
    
      <div className='relative bg-transparent
        ml-[10%] w-[80%] h-auto mt-[20px]'>
        <div className='flex max-md:flex-col flex-row'>
          <div className='max-md:w-full w-2/5 h-[600px] max-md:items-center max-md:justify-center '>
            <img  src="Images/about1.jpeg" alt="Team-image" 
            className='w-full h-full rounded-xl p-[15px] shadow-md '/>
          </div>
          <div className='relative max-md:w-full w-3/5 border-2 border-black rounded-lg max-sm:mt-5 text-wrap p-5
          bg-green-400/80  shadow-lg mt-2 mr-2 mb-2 h-[600px] 'data-aos='fade-up' >
            <h1 className='text-green-600 text-3xl text-center mb-1 font-bold' data-aos='fade-right'>About Us</h1>
            <p className='text-lg font- sans text-white font-semibold'>Founded in 2014, Miki Garden Belt and Landscaping Service has cultivated a reputation for excellence. </p>
            <p className='text-lg font- sans text-white font-semibold'>We combine our passion for greenery with unparalleled expertise to bring your outdoor and indoor spaces to life</p>
            <p className='text-lg font- sans text-white font-semibold'> Our team boasts experienced and professional gardeners who are passionate about using scientific methods to cultivate thriving environments.</p>
            <p className='text-lg font- sans text-white font-semibold'>Whether you require meticulous lawn care or a complete garden design overhaul, our team is dedicated to transforming your vision into a flourishing reality.</p>
            <p className='text-lg font- sans text-white font-semibold'>At Miki Garden Belt and Landscaping, we believe every green space deserves care.</p>
            <p className='text-lg font- sans text-white font-semibold'>We offer a comprehensive range of services, from initial garden design to ongoing lawn care and maintenance</p>
            <p className='text-lg font- sans text-white font-semibold'>Our experienced and professional gardeners are passionate about using scientific methods to cultivate thriving outdoor and indoor environments</p>
            <p className='text-lg font- sans text-white font-semibold'>No project is too big or too small – we're here to ensure your green haven flourishes.</p>
          </div>
        </div>
        
      
       <div className='mt-[50px]'>
          <p className='text-center underline font-sans 
          text-2xl font-bold mb-[15px]' data-aos='fade-left'>Why Choose Us</p>
      </div>
      <div className='grid max-sm:grid-cols-1 grid-cols-2 gap-5'>
        <div className=' h-auto p-4  bg-green-500/15 hover:p-6 transition-all border-2 shadow-xl rounded-2xl' data-aos='fade-up'>
        <p className='text-lg font-sans text-green-500 mb-3 font-bold text-wrap'>Miki Garden Belt & Landscaping:</p>
        <p className='font-sans text-wrap text-lg font-bold mb-3'>We bring the outdoors in
             and the indoors out.</p>
        <p className='font-sans text-wrap text-lg mb-3 font-bold'>Our expert team creates stunning landscapes & flourishing indoor 
              displays for homes & offices in Addis Ababa.</p>
        </div>
        <div className=' h-auto bg-green-500/15 p-4 hover:p-6 transition-all border-2 
        shadow-xl rounded-2xl' data-aos='fade-up'>
          <p className='text-green-600 text-xl font-sans font-bold 
          mb-4 text-wrap'>14 Years of Expertise: </p>
          <p className='font-sans font-bold text-lg text-wrap'> Flawless execution for any project, big or small.</p>
        </div>
        <div className=' h-auto bg-green-500/15 border-2 p-4 hover:p-6 transition-all  
        shadow-xl rounded-2xl' data-aos='fade-up'>
          <p className='text-green-600 font-sans font-bold text-xl mb-4'>Indoor & Outdoor Specialists:</p>
          <p className='font-sans text-lg font-bold text-wrap'>Personalized service for your unique vision.</p>
        </div>
        <div className='h-auto bg-green-500/15 border-2 p-4 hover:p-6 transition-all  
        shadow-xl rounded-2xl' data-aos='fade-up'>
          <p className='text-green-600 text-xl font-sans mb-4 text-wrap font-bold'>Unmatched Quality:</p>
          <p className='font-sans text-lg font-bold text-wrap'>Sustainable beauty built to last.</p>
        </div>
      </div>
      <div className='flex flex-row my-[20px] justify-center items-center'>
        <p className='font-sans font-medium'>Let's do better 👉</p>
        <a href="./Contact">
        <button className='bg-green-600 border-2 rounded-lg shadow-lg
        py-[10px] px-[20px] ml-[5px] hover:px-[15px] transition-all'>contact us</button>
        </a>
      </div>
      </div>
      <Footer />

    </div>
  )
}

export default About
