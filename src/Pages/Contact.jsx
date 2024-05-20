
import React, { useEffect }  from 'react'
import { useRef } from 'react'
import Navbar from '../Components/Navbar'
import emailjs from '@emailjs/browser'
import Footer from '../Components/Footer'
import { SiGmail } from "react-icons/si";
import { FaTelegram, FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {
  useEffect(()=>{
    Aos.init();
  }, [])
  const socialMedia = {
    width:'50px', 
    height:'50px', 
    marginLeft:'40%', 
    marginBottom:'30px', 
    marginTop:'30px'
  }

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4erlm7k', 'template_v8nz4cj', form.current, {
        publicKey: '5LxaNknJRnPo8fVkA',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );}
  return (
    <div>
      <Navbar />
      
       <div className='w-[80%] ml-[10%] my-[30px] h-[600px] bg-transparent
       border rounded-lg relative shadow-lg flex flex-row'>
        <div className='max-md:w-full w-[60%] h-aut0'>
        <form className='flex flex-col mt-10 items-center'  
        ref={form} onSubmit={sendEmail}>
        <h1 className='font-bold mb-4 text-2xl'>Contact Us</h1>
        <label className='font-sans font-semibold'>
          Name</label>
        <input className='w-[300px] px-1 py-2 border focus:outline-none
        focus:border-indigo-600 rounded-lg' 
        type="text" placeholder='Your name' name="from_name" /><br />
        <label className='font-sans font-semibold '>Email</label> 
        <input className='w-[300px] px-1 py-2 border rounded-lg focus:outline-none
        focus:border-indigo-600' 
        type="email" placeholder='example@gmail.com' name="from_email" /> <br />
        <label className='font-sans font-semibold'>Message</label> 
        <textarea className='w-[300px] h-[150px] px-1 py-2 focus:outline-none
        focus:border-indigo-600
        border rounded-lg ' placeholder='Write something' name="message" /> <br />
        <input className='bg-green-600 rounded-lg 
        text-white cursor-pointer hover:px-6 hover:py-4
         px-5 py-3 text-center font-sans font-semibold' type="submit" value="Send" data-aos='fade-right' data-aos-duration='1000'/>
       </form>
        </div>
        <div className='max-md:hidden block w-[40%] '>
          <img className='w-full h-[580px] rounded-xl p-2' src="Images/mikiphone1.png" alt="Miki Phone" />
        </div>
       </div>
       <div className='grid grid-cols-3 max-md:grid-cols-1 gap-2 grid-flow-row w-[90%] mb-[30px] ml-[5%]'>
        <div className='bg-green-400/50 rounded-lg h-auto p-4' data-aos='fade-up' data-aos-duration='1000'>
          <p className='text-lg font-sans text-center font-semibold' data-aos='fade-left' data-aos-duration='1000'>Email:</p>
          <p className='text-center text-wrap text-white'>Send us a message with your inquiry using our email address: </p>
          <div className='' data-aos='fade-right' data-aos-duration='1000'>
            <a href="mailto:gardeninethiopia@gmail.com" target='_blank'> <SiGmail 
            style={socialMedia }/> </a>
          </div>
        </div>
        <div className='bg-green-400/50 rounded-lg h-auto p-4' data-aos='fade-up' data-aos-duration='1000'>
          <p className='text-center font-sans text-lg font-semibold' data-aos='fade-right' data-aos-duration='1000'>Phone:</p>
          <p className='text-center my-2 font-sans text-white text-wrap'>Give us a call to speak directly with a member of our team. We have two 
            phone numbers for your convenience:</p>
            <p className='text-center my-2' data-aos='fade-left' data-aos-duration='1000'>+251-965-191-919</p>
            <p className='text-center mb-4' data-aos='fade-left' data-aos-duration='1000'>+251-930-109-999</p>
        </div>
        <div className='bg-green-400/50 rounded-lg h-auto p-4' data-aos='fade-up' data-aos-duration='1000'>
          <p className='text-center font-sans font-bold text-lg my-3' data-aos='fade-left' data-aos-duration='1000'>Telegram:</p>
          <p className='text-white text-center'>Connect with us on Telegram for 
            quick updates and communication: </p>
            <div className='' data-aos='fade-right' data-aos-duration='1000'>
              <a href="https://t.me/MikiGardenBelt" target='_blank'><FaTelegram 
              style={socialMedia} /></a>
              </div>
        </div>
        <div className='bg-green-400/50 rounded-lg h-auto p-4' data-aos='fade-up' data-aos-duration='1000'>
          <p className='text-center text-xl font-sans font-bold my-2' data-aos='fade-left'>Facebook:</p>
          <p className='text-center text-white'>Like our Facebook page for updates, project 
            showcases, and gardening tips:</p>
            <div className='' data-aos='fade-up' data-aos-duration='1000'>
              <a href="https://www.facebook.com/profile.php?id=100063884652882&mibextid=ZbWKwL" target='_blank'><FaFacebookSquare 
              style={socialMedia}/></a>
              </div>
        </div>
        <div className='bg-green-400/50 rounded-lg h-auto p-4' data-aos='fade-up' data-aos-duration='1000'>
          <p className='text-center text-xl font-sans font-bold' data-aos='fade-right'>Instagram:</p>
          <p className='text-center text-white my-3 text-wrap'>Follow us on Instagram for inspiring 
            photos and landscaping ideas: </p>
            <div className='' data-aos='fade-left' data-aos-duration='1000'>
              <a href="https://www.instagram.com/miki_garden?igsh=c3dmNzg0bWJpbzBm" target='_blank'><FaSquareInstagram 
              style={socialMedia }/></a>
              </div>
        </div>
        
       </div>
       <Footer />
    </div>
  )
}

export default Contact
