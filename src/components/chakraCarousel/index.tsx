import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './index.css'
import {ImageItem} from '../../types/projectData'
// If you want to use your own Selectors look up the Advancaed Story book examples
const ImageSlider = ({ slides }: {slides: ImageItem[]}) => {
  return (
    <Carousel infiniteLoop showThumbs={false}>
      {slides.map((slide,index) => {
        return <Image
          key={index}
          src={slide.image.src}
          alt="project-image"
          width={slide.image.width}
          height={slide.image.height}
          style={{ width: "100%", height: "auto" }}
        />

      })}
    </Carousel>
  );
};

export default ImageSlider;
