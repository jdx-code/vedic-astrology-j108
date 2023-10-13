import { useState } from 'react'
import Menu from './components/Menu'
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
import logoSmall from "/logoSmall.png"
import ScrollToTopButton from './components/ScrollToTopButton'

function App() {

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
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
      <nav>
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4">
          <div className="flex-shrink-0 font-bold tracking-wider">
            <img src={logoSmall} />
          </div>
          <div className="hidden md:block">
            <Menu />
          </div>
          <button
            type="button"
            className="md:hidden bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
            onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="md:hidden">
          {showMobileMenu && <Menu />}
        </div>
      </nav>  

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
      
      <ScrollToTopButton />

      <Footer />       
    </>
  )
}

export default App
