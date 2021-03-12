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
    <img width='80%' src='https://i.imgur.com/YKIbM90.jpg' alt='concert' />
    <img width='80%' src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80" alt='concert1' />
    </Carousel>
     </div>
    </>
  );
};

export default ImageCarousel;