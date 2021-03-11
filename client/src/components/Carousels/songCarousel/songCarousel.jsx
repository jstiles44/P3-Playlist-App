import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './songCarousel.css'

const SongCarousel = (props) => {
  return (
      <Carousel autoPlay={true} interval='3000' infiniteLoop transitionTime='500' showThumbs={false} className='recently-added'>
        {props.recentlyAdded.map((song, index) => (
          <div style={{height: '300px', width: '300px'}} key={index}>
            <img src={song.albumCover} alt={song.album}
              className='album-art' />
            <div className='album-title'>{song.title}</div>
            <div className='artist'>{song.artist}</div>
          </div>
        ))}
      </Carousel>
  );
};

export default SongCarousel;