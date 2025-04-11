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

  if ("serviceWorker" in navigator && "PushManager" in window) {
    navigator.serviceWorker.register("/sw.js")
      .then((registration) => {
        console.log("✅ Service Worker registered:", registration);
      })
      .catch((error) => {
        console.error("❌ Service Worker registration failed:", error);
      });
  }




  
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');

  const rawData = atob(base64);
  return Uint8Array.from([...rawData].map(char => char.charCodeAt(0)));
}



const vapidPublicKey = "BHqR_mJzy1jiQLaw5CDoH1JfPQtBxWIpOSYuIDWB440jovkm4CsYYB5Slby0DuBh8CiqAtuFtCq9Z73gMNx3yqI"
const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);

function arrayBufferToBase64Url(buffer) {
  const base64 = btoa(String.fromCharCode(...new Uint8Array(buffer)));
  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}


const registerForPushNotifications = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission !== "granted") return;

    // const registration = await navigator.serviceWorker.ready;
    const registration = await navigator.serviceWorker.register('/sw.js');
    
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: convertedVapidKey
    });

    const p256dh = arrayBufferToBase64Url(subscription.getKey("p256dh"));
    const auth = arrayBufferToBase64Url(subscription.getKey("auth"));


    console.log("P256DH is ", p256dh);
    console.log("AUTH is", auth);

    const payload = {
      userId: "e75106f1-84dd-42c1-828e-75792eb42cb2",
      endpoint: subscription.endpoint,
      p256dh,
      auth,
      tags: "customer_e75106f1-84dd-42c1-828e-75792eb42cb2"
    };

    console.log("PAY___LOAD___IS : ", payload);

    await fetch(`http://localhost:8080/customers/register-web-subscription`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    console.log("✅ Web push subscription registered");


    // ✅ Show a browser notification immediately
    // new Notification("Subscribed!", {
    //   body: "You’ve successfully registered for web push notifications. 🎉",
    //   icon: "/icons/icon-192x192.png" // optional
    // });



  } catch (error) {
    console.error("🚨 Push registration failed", error);
  }
};


useEffect(() => {
  registerForPushNotifications();
}, []);

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
