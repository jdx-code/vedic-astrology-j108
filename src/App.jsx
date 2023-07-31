import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import './App.css'
import about from './about.js'
import salutations from './salutations.js'
import services from './services.js'
import Hero from './components/Hero'
import About from './components/About'
import Cards from './components/Cards'
import Consultation from './components/Consultation'


function App() {
  
  const salutationCards = salutations.map(item => {
    return (
      <Cards 
        img={item.img}
        name={item.name}
        url={item.url}
      />
    )
  })

  const servicesCards = services.map(item => {
    return (
      <Cards 
        item={item}
      />
    )
  })

  return (
    <>      
      <Navbar />      
      <Hero />
      <About content={about[0].content} url={about[0].url}/>
      <section className='flex flex-wrap justify-center text-sm mt-4 mb-20'>        
        {salutationCards}
      </section>      
      <About content={about[1].content} url={about[1].url}/>
      <section className='flex flex-wrap justify-center text-sm mt-4 mb-20'>        
        {servicesCards}
      </section>  
      <Consultation />    
    </>
  )
}

export default App
