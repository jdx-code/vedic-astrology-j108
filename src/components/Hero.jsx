import nataraja from '/nataraja.jpg'
import logo from '/logo1.png'

const Hero = () => {
    return (
        <div className="hero-container flex justify-evenly">           
            <div className="left-content py-12 flex flex-col justify-evenly items-center z-10 md:my-6 lg:my-0 lg:mt-20 lg:ml-6 lg:p-2">
                <img src={logo} />
                <div className='w-[80%] h-auto bg-gray-100 text-center border-4 border-blue-400 rounded-md'>
                    <p>For any queries call/whatsapp us at</p>
                    <p className='text-3xl font-extrabold'>+91-9101489058</p>
                </div>                
            </div>   
            <div className='hidden right-content z-10 md:block lg:ml-20'>
                <img src={nataraja} className="md:h-full"/>
            </div>         
        </div>
    )
}

export default Hero
