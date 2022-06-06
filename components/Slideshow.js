import React from "react";
import 'react-slideshow-image/dist/styles.css'
import { Zoom } from "react-slideshow-image";
import image1 from "../public/images/africa boys.jpg";
import image2 from "../public/images//fela.jpg";
import image3 from "../public/images/mandela.jpg";
import image4 from "../public/images/elephant.jpg";
import image5 from "../public/images/marimba.jpg";
// style was imported in index.css
// import "react-slideshow-image/dist/styles.css";
const images = [image1, image2, image3, image4, image5];

const zoomOutProperties = {
  duration: 300,
  transitionDuration: 0,
  infinite: true,
  indicators: false,
  arrows: false
};
const Slideshow = () => {
    return (
        <div className="slide-container">
          <Zoom {...zoomOutProperties}>
            {images.map((each, index) => (
              <img key={index} style={{ width: "100%" }} src={each} />
            ))}
          </Zoom>
        </div>
      );
  }
  
  export default Slideshow;
