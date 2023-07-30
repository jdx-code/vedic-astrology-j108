import nataraja from '/nataraja.jpg'
import logo from '/logo.png'

const Hero = () => {
    return (
        <div className="hero-container flex justify-center">           
            <div className="left-content z-10">
                <img src={logo} />
            </div>            
        </div>
    )
}

export default Hero
