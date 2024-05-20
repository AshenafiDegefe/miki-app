import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = ()=> {
    setIsOpen(! isOpen);
  }
  return (
    <nav className='sticky top-0 z-20 w-[90%] ml-[5%] bg-green-400/50 px-[20px] py-2 shadow-xl text-white flex justify-between items-center '>
      <div className='flex items-center w-1/3'>
      <NavLink to='/'><img className='w-[80px] h-[80px] rounded-full'
       src="Images/mikilogo.jpg" alt="Miki logo" /></NavLink>
      </div>
      <button  className="hidden max-md:block transition duration-150 ease-in-out hover:bg-gray-700 rounded-full p-5 mr-4"
          onClick={toggleMenu}>
      {isOpen ?(
            <RxCross2 style={{width:'40px',height:'50px', background:'black', borderRadius:'50%', padding:'8px'}}/>
          ) : (
            <IoMenu style={{width:'50px',height:'50px', background:'black', borderRadius:'5px', padding:'8px'}}/>
          )}
      </button>
      <ul className={!isOpen ? "hidden md:flex flex-col md:flex-row md:space-x-8 " : "flex flex-col md:flex-row md:space-x-8 "}>
        
        <li className='p-2 hover:p-3 transition-all'>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li className='p-2 hover:p-3 transition-all'>
          <NavLink to='/About'>About</NavLink>
        </li>
        <li className='p-2 hover:p-3 transition-all'>
          <NavLink to='/Services'>Services</NavLink>
        </li>
        
        <li className='bg-green-600 transition-all p-2 rounded-lg shadow-lg hover:p-3'>
          <NavLink to='/Contact'>Contact us</NavLink>
        </li>
        
      </ul>
    </nav>
  )
}

export default Navbar
