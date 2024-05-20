import React from 'react'
import { FaTelegram, FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";


const Footer = () => {
  const today = new Date(); 
  const year = today. getFullYear();
  const socialMedia = {
    width:'30px', 
    height:'30px',
    backgroundColor:'white',
    marginTop:'8px'
  }
  return (
    <div className='w-full h-auto bg-black py-4 shadow-2xl max-md:px-[5%] px-[10%]'>
      <p className='text-green-600 text-center font-sans
      font-bold text-xl mb-2 text-wrap'>Miki Garden Belt and Landscaping Services</p>
      <div className='grid grid-cols-3 gap-2 '>
        <div className='flex flex-col '>
          <a href="./"><img className='w-[80px] h-[80px] rounded-full'
       src="Images/mikilogo.jpg" alt="Miki logo" /></a>
         <a className='text-white text-sm' href="./">Home</a>
         <a className='text-white text-sm ' href="./About">About_Us</a>
         <a className='text-white text-sm ' href="./Services">Services</a>
         <a className='text-white text-sm ' href="./Contact">Contact Us</a>
         <a className='text-orange-600 my-2 text-[8px]' href="mailto:ashenafidegefe8@gmail.com" target='_blank'>Dev.by:- Ashenafi.D</a>
        </div>
        
        <div>
          <p className='text-white font-bold'>Address:</p>
          <p className='text-white text-sm'>Urael Belay business tawor 3rd floor.</p>
          <p className='text-white font-bold'>Phone:</p>
          <p className='text-white text-sm'>+251-965-191-919</p>
          <p className='text-white text-sm'>+251-930-109-999</p>
          <p className='text-white mt-[30px] text-sm'>&copy;{year}-Miki Garden Belt and Landscaping Services:All Rights Reserved.</p>
          
        </div>
        <div className='max-md:ml-[50px] ml-[100px]'>
          <p className='text-blue-800 font-bold text-lg'>Follow Us </p>
          <a  href="https://www.facebook.com/profile.php?id=100063884652882&mibextid=ZbWKwL" target='_blank'><FaFacebookSquare 
              style={socialMedia}/></a>
          <a href="https://www.instagram.com/miki_garden?igsh=c3dmNzg0bWJpbzBm" target='_blank'><FaSquareInstagram 
              style={socialMedia }/></a>
          <a href="https://t.me/MikiGardenBelt" target='_blank'><FaTelegram 
              style={socialMedia} /></a>
          </div>
      </div>
    </div>
  )
}

export default Footer
