import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './index.css'
import {image} from '../../types/projectData'
// If you want to use your own Selectors look up the Advancaed Story book examples
const ImageSlider = ({ slides }: {slides: image[]}) => {
  return (
    <Carousel infiniteLoop showThumbs={false}>
      {slides.map((slide,index) => {
        return <Image src={slide.image} alt="project-image" height="auto" width="800px" key={index} />;
      })}
    </Carousel>
  );
};

export default ImageSlider;
