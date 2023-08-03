import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import testimonialData from '../testimonials.js'
import '../carousel.css'

const Testimonials = () => {
  
  return (
    <Carousel 
      autoPlay        // Enables automatic sliding
      interval={5000} // Time interval in milliseconds (5 seconds in this case)
      infiniteLoop    // Loops back to the beginning after the last slide
      showThumbs={false} // Hide the navigation dots
    >
      {testimonialData.map((item, index) => (
        <div key={index} className="testimonial-section flex flex-col items-center w-[95%] mx-auto p-12">
          <img src={`/testimonials/${item.img}`} alt={`Testimonial ${index + 1}`} />
          <p className="text-xl font-bold">{item.name}</p>
          <p className="text-md font-bold">{item.location}</p>          
          <blockquote>
            <p className="md-12">{item.comment}</p>
          </blockquote>                             
        </div>
      ))}
    </Carousel>
  );
}

export default Testimonials;