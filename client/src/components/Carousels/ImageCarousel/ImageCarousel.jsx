import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './ImageCarousel.css';

const ImageCarousel = () => {
  return (
    <>
      <div className='image-container'>
        {/* <div className='tagline'> Create A Playlist That Matches Your Personality!</div> */}
    <Carousel autoPlay={true}
     interval='5000'
      infiniteLoop
      transitionTime='1000'
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      className='images'>
    <img width='80%' src='https://i.imgur.com/wvvfWUb.jpg' alt='van' />
    <img width='80%' src='https://i.imgur.com/RiXBLSW.jpg' alt='concert' />
    <img width='80%' src="https://i.imgur.com/Yd0B6hl.jpg" alt='concert1' />
    </Carousel>
     </div>
    </>
  );
};

export default ImageCarousel;