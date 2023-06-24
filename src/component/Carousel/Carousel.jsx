import React from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import One from "../../assets/1.avif";
import two from "../../assets/2.avif";
import three from "../../assets/3.avif";
import four from "../../assets/4.avif";
;

const Carousel = () => {
  return (
    <CCarousel controls indicators className="mt-5"> 
      <CCarouselItem>
        <CImage className="d-block w-100 vh-25" src={two} alt="slide 2" />
      </CCarouselItem>
    
      <CCarouselItem>
        <CImage className="d-block w-100 vh-25" src={three} alt="slide 3" />
      </CCarouselItem>
      
      <CCarouselItem>
        <CImage className="d-block w-100 vh-25" src={four} alt="slide 4" />
      </CCarouselItem>
     
      <CCarouselItem>
      <CImage className="d-block w-100 vh-25" src={One} alt="slide 1" />
      </CCarouselItem>

    </CCarousel>
  );
};

export default Carousel;
