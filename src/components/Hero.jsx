import nataraja from '/nataraja.jpg'
import logo from '/logo.png'

const Hero = () => {
    return (
        <div className="hero-container flex">
            <div className="left-content w-[60%] z-10">
                <img src={logo} />
            </div>
            <div className="right-content z-10">
                <img src={nataraja} />
            </div>
        </div>
    )
}

export default Hero
