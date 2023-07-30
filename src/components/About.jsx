import devarshi from '/devarshi.jpeg'

const About = () => {

    const vid = '/001.mp4';

    return (
        <div className="about-section flex m-12 justify-around">            
            <div className='w-[50%]'>
                <h1 className='text-3xl font-extrabold my-4'>About</h1>
                <p className='text-justify'>Jyotish108 is an online organization devoted to clearing gross misconceptions prevalent in Vedic astrology and making genuine Jyotish services available to the masses at cheaper rates. At a time, when reputed online astrologers charge a very large sum for a basic astrological consultation, we at jyotish108 are committed to providing similar services at extremely low costs including remedies that can be easily done without spending a dime! It is our guarantee that your life problems can be solved without going for costly gemstones and pendants and as such it is our resolve NEVER to make our clients go for costly and practically useless gem therapy. Occult remedies are also available as per requirement of the client. Do consult once to experience the difference!.</p>
            </div>
            <div className='w-[25%]'>                
            <video width="800" height="500" controls>
                <source src={vid} type="video/mp4" />
                <source src="movie.ogg" type="video/ogg" />
                Your browser does not support the video tag.
            </video>
                
                
            </div>
        </div>
    )
}

export default About