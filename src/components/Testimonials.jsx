import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import testimonialData from '../testimonials.js'
import '../carousel.css'

const Testimonials = () => {
  
  return (
    <Carousel>
      {testimonialData.map((item, index) => (
        <div key={index} className="flex flex-col items-center w-[95%] mx-auto p-12">
          <img src={`/testimonials/${item.img}`} alt={`Testimonial ${index + 1}`} />
          <p className="text-xl font-bold">{item.name}</p>
          <p className="text-md font-bold">{item.location}</p>          
          <p className="md-12">{item.comment}</p>
        </div>
      ))}
    </Carousel>
  );
}

export default Testimonials;