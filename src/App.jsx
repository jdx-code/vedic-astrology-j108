import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import './App.css'
import about from './about.js'
import salutations from './salutations.js'
import services from './services.js'
import images from './gallery.js'
import Hero from './components/Hero'
import About from './components/About'
import Cards from './components/Cards'
import Consultation from './components/Consultation'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

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

  const imageGalleryCards = images.map(item => {
    return (
      <Cards 
        img={item.img}
      />
    )
  })

  return (
    <>      
      <Navbar />      
      <Hero />
      <About content={about[0].content} url={about[0].url} />
      <section className='flex flex-col items-center' id="salutations">                
        <h1 className='text-4xl font-extrabold mt-8'>Salutation to Gurus and Gaurangas</h1>
        <div className='flex flex-wrap justify-center text-sm mt-4 mb-20'>
          {salutationCards}
        </div>
      </section>      
      <About content={about[1].content} url={about[1].url}/>             
      <section className='flex flex-col items-center' id="services">
        <h1 className='text-4xl font-extrabold mt-8'>Services</h1>
        <div className='flex flex-wrap justify-center text-sm mt-4 mb-20'>
          {servicesCards}
        </div>                 
      </section>  
      <Consultation />
      <section className='flex flex-col items-center' id="gallery">
        <h1 className='text-4xl font-extrabold mt-8'>Gallery</h1>
        <div className='flex flex-wrap justify-center text-sm mt-4 mb-20'>
          {imageGalleryCards} 
        </div>                 
      </section>        
      <Testimonials />
      <Contact />
      <Footer />       
    </>
  )
}

export default App
