import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Nopage from './Pages/Nopage'
function App() {
 

  return (
    <>
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='About' element={<About />}/>
    <Route path='Services' element={<Services />}/>
    <Route path='Contact' element={<Contact />}/>
    <Route path='Nopage' element={<Nopage />}/>
    </Routes>
    </>
  )
}

export default App
