import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './songCarousel.css'

const SongCarousel = (props) => {
  return (
    <div className='recently-added'>
      <h2>Recently Added</h2>
    <Carousel autoPlay={true}
      interval='3000'
      infiniteLoop
      transitionTime='500'
      showThumbs={false}
        showStatus={false}
        showIndicators={false}
      >
        {props.recentlyAdded.map((song, index) => (
          <div style={{height: '100%', width: '300px'}} key={index}>
            <img src={song.albumCover} alt={song.album}
              className='album-art' />
            <div className='album-title'>{song.title}</div>
            <div className='artist'>{song.artist}</div>
          </div>
        ))}
      </Carousel>
      </div>
  );
};

export default SongCarousel;