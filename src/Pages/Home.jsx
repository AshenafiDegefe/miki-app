import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { FaFileDownload } from "react-icons/fa";
import Profile from '../assets/CompanyProfile/files/Profile.pdf'


const Home = () => {
  useEffect(()=> {
    Aos.init();
  },[])
  return (
    <div>
        <Navbar />
        
      <section>
      <div className='w-[80%] ml-[10%] h-auto bg-transparent 
      flex flex-row mt-[20px] rounded-lg shadow-lg' style={{backgroundImage:"url(Images/hero1.jpeg)",
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover',
      
      }}>

        <div className='mt-[80px] w-full  h-auto max-md:p-[20px] p-[150px]'>
          <p className='text-wrap font-sans p-4
          font-bold text-2xl text-green-600 mb-5 text-center bg-slate-200/50 rounded-lg' data-aos ='fade-up' data-aos-duration='1000'>
            Miki Garden Belt and Landscaping Services</p>
          <p className='text-center text-wrap
          text-3xl font-sans font-extrabold mb-5'>Transform Your Outdoor Space in to a Personal 
            Oasis</p>
           <p className='text-center mb-5 bg-slate-200/50 rounded-lg p-4
           text-green-600 font-sans font-bold text-xl text-wrap' data-aos ='fade-up' data-aos-duration='1000'>
            Expert Landscaping and Gardening Services for 
            Every Dream_yard</p> 
            <p className='text-lg text-center py-2 shadow-md font-sans font-bold bg-white p-4 rounded-md '
            data-aos ='fade-left'
            data-aos-duration='1000'>14+ Years Experience</p>
            <div className='mt-[20px] ml-[30%] justify-center items-center'>
              <a href="./Contact">
              <button className='bg-green-600/70 border px-[25px] py-[10px] 
             rounded-xl hover:px-[20px] text-xl text-center text-white shadow-lg transition-all'
             data-aos ='fade-up' data-aos-duration='1000'>Contact Us</button>
              </a>
            </div>
        </div>
        
        
      </div>

      </section>
      

      <section>
      <div className='flex max-md:flex-col flex-row w-[80%] h-auto ml-[10%]
       shadow-2xl mt-[40px] mb-[40px] rounded-2xl bg-green-300/25 p-4'
       data-aos='fade-up'>
        <div className='max-md:w-[100%] w-[50%] h-[100%] mr-2 mb-2'>
          <h1 className='text-green-600 font-extrabold font-sans text-2xl
          text-center mb-3' >About Us</h1>
          <p className='text-xl font-bold'> Established in 2002 E.C </p>
          <p className='text-lg font-semibold'>and We are a reputable Landscaping Company with extensive
            experience in the field of new Landscape development and
            maintenance of already developed ones.
          </p>
          <div className='flex flex-row'>
          <a href="./About">
          <button className='bg-green-600/80 p-[8px] mr-4 text-white text-lg mb-3 mt-3
           rounded-lg shadow-xl hover:p-[10px] transition-all'
           data-aos='fade-right' data-aos-duration='1000'>Read more</button>
          </a>
          <a href={Profile} download="MyProfile" target='_blank'>
          <button className='bg-white text-lg border-2 hover:p-[10px]
          rounded-lg p-[8px] mb-3 mt-3 transition-all'
          data-aos='fade-left' data-aos-duration='1000'>Download profile<FaFileDownload style={{width:'150px'}}/></button>
          </a>
          
        </div>
        </div>
        <div className='max-md:w-[100%] w-[50%] h-[100%] ' data-aos='fade-up' data-aos-duration='1000'>
          <img className='w-[100%] h-[500px] rounded-lg shadow-xl' src="Images/hero2.jpeg" alt="about us " />
        </div>
       </div>
      
      </section>
      <section>
      <div className='w-[80%] h-auto ml-[10%] 
        mt-[20px] border-[2px] rounded-xl shadow-xl mb-[20px] p-4 '
        style={{backgroundImage:"url(Images/outdoor1.jpg)",
          backgroundRepeat:"no-repeat",
          backgroundSize:"cover"
        }} data-aos='fade-up' data-aos-duration='1000'>
          <p className='text-center mb-4 font-sans font-extrabold text-2xl underline underline-offset-4 bg-slate-100/50 p-3 rounded-2xl'
          data-aos='fade-up' data-aos-duration='1000'>Our Services</p>
          <div className=' bg-green-400/50 w-[250px] rounded-lg h-auto'
          data-aos='fade-left' data-aos-duration='1000'>
            <p className=' text-white text-wrap font-sans font-bold p-4'>✔ Garden and Landscape design </p>
            <p className=' text-white text-wrap font-sans font-bold p-4'>✔ Lawn care</p>
            <p className=' text-white text-wrap font-sans font-bold p-4'>✔ Indoor Gardening </p>
            <p className=' text-white text-wrap font-sans font-bold p-4'>✔ Outdoor gardening </p>
            <p className=' text-white text-wrap font-sans font-bold p-4'>✔ Garden input supply</p>
          </div>
          <div className='max-md:ml-[30px] ml-[40%] max-md:w-[200px] w-[500px] mt-[30px] flex max-md:flex-col flex-row'>
            <a href="./Contact">
            <button className='hover:p-2 transition-all max-md:ml-4 ml-0 max-md:mr-0 mr-[20px] bg-green-600/60 text-white p-3 rounded-xl font-semibold text-xl mb-4'
            data-aos='fade-right' data-aos-duration='1000'>Contact us</button>
            </a>
            <a href="./Services">
            <button className='hover:p-2 transition-all max-md:ml-4 ml-0 bg-green-600/60 text-white p-3 rounded-xl font-semibold text-xl mb-4'
            data-aos='fade-up' data-aos-duration='1000'>Read more</button>
            </a>
          </div>
    </div>
      </section> 

      <section>
        <p className='text-center text-2xl font-sans font-extrabold mb-[10px] underline underline-offset-2'
        data-aos='fade-right' data-aos-duration='1000'>Featured On</p>
        <div className='grid  grid-cols-6 bg-green-500/40 gap-2 justify-items-center mb-[25px] mx-[40px] rounded-2xl shadow-xl p-2'
        data-aos='fade-up' data-aos-duration='1000'>
          <img className='max-md:w-[50px] max-md:h-[50px] w-[100px] h-[100px] rounded-full' src="Images/Ethio-Telecom.jpg" alt="Etio-Telecom Logo" />
          <img className='max-md:w-[50px] max-md:h-[50px] w-[100px] h-[100px] rounded-full' src="Images/AAU.png" alt="AAU Logo" />
          <img className='max-md:w-[50px] max-md:h-[50px] w-[100px] h-[100px] rounded-full' src="Images/Airlines.jpg" alt="Etiopian Airlines Logo" />
          <img className='max-md:w-[50px] max-md:h-[50px] w-[100px] h-[100px] rounded-full' src="Images/foreign.png" alt="Foreign Affairs of Etiopian Logo" />
          <img className='max-md:w-[50px] max-md:h-[50px] w-[100px] h-[100px] rounded-full' src="Images/us.jpg" alt="US Embassy Logo" />
          <img className='max-md:w-[50px] max-md:h-[50px] w-[110px] h-[110px] rounded-full' src="Images/national.png" alt="National Bank of Etiopian Logo" />

        </div>
      </section>
      <section>
        <div className='flex ml-[10%] max-md:flex-col flex-row mb-[30px] bg-transparent w-[80%] max-md:h-auto h-[600px]  rounded-xl border-2 p-2'
        data-aos='fade-up' data-aos-duration='1000'>
          <div className='max-md:w-full w-[60%] max-md:mt-2 mt-[200px] '>
            <p className='text-xl font-sans font-extrabold text-center underline underline-offset-2'
            data-aos='fade-left' data-aos-duration='1000'>Contact Us</p>
            <p className='text-center my-4 text-lg'>Address: urael belay business tawor 3rd floor</p>
            <p className='text-xl font-bold text-center'>Phone: </p>
            <p className='text-lg text-center'>+251-965-191-919</p>
            <p className='text-lg text-center'>+251-930-109-999</p>
          </div>
          <div className='max-md:w-full w-[40%] ml-' data-aos='fade-up' data-aos-duration='1000'>
            <img className='w-full h-[580px]   rounded-lg shadow-xl' src="Images/mikiphone.png" alt="miki phone" />
          </div>
        </div>
      </section>
      <Footer />
   </div>    
  )
}

export default Home
