import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Cards from './components/Cards'

function App() {
  
  return (
    <>      
      <Navbar />      
      <Hero />
      <About />
      <Cards />
    </>
  )
}

export default App
