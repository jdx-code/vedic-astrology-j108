import devarshi from '/devarshi.jpeg'

const About = (props) => {

    return (        
        <div className='about-section md:w-full'>
            <div className='py-10 flex flex-col-reverse md:w-[80%] md:mx-auto md:flex-row md:items-center'> 
                <div className='w-[80%] mx-auto md:w-[70%] lg:w-[60%]'>
                    <h1 className='text-4xl font-extrabold my-4'>
                    {props.url.endsWith('.mp4') ? (             
                        <span>About</span>
                    ) : (
                        <span>About Me</span>
                    )}  
                    </h1>  
                    <p className='text-justify'>{props.content}</p>
                </div>            
                <div className='w-[80%] mb-4 mx-auto md:mb-0 md:pl-4 md:w-[65%] lg:w-[45%]'>   
                {props.url.endsWith('.mp4') ? (             
                    <video className='w-[100%] h-auto' controls>
                        <source src={props.url} type="video/mp4" />
                        <source src="movie.ogg" type="video/ogg" />
                        Your browser does not support the video tag.
                    </video> 
                ) : (
                    <img className='w-[100%] h-auto' src={props.url} alt="About Image" />
                )}
                </div>
            </div>
        </div>        
    )
}

export default About