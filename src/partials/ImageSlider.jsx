import React from 'react';
import '../partials/partials.css';  
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ImageSlider = () => {
  const images = [
    "https://www.muratogluhome.com.tr/uploads/slide/image/161/swiss.png",
    "https://www.muratogluhome.com.tr/uploads/slide/image/165/Bah_e_Mobilyas_.png",
    "https://www.muratogluhome.com.tr/uploads/slide/image/159/Leggno.png"
  ];

  return (
    <div >  
      <Carousel infiniteLoop='true'>
        {images.map((item,index)=>{
          return ( <div key={index}>
            <img src={item} />
         </div>)
        })}
               
              
            </Carousel>
    </div>
  );
}

export default ImageSlider;
