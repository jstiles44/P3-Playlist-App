import { Carousel } from 'react-responsive-carousel';
import {Link} from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './songCarousel.css'

const SongCarousel = (props) => {
  return (
    <div className='recently-added'>
      <h2>Recently Added</h2>
    <Carousel autoPlay={true}
      interval='3000'
      infiniteLoop
      transitionTime='700'
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      >
        {props.recentlyAdded.map((song, index) => (
          <div height='100%' key={index}>
            <Link to={`/explore/${song._id}`}>
            <img height='200px' width='25px' src={song.albumCover} alt={song.album}
              className='album-art' />
            <div className='album-title'>{song.title}</div>
              <div className='artist'>{song.artist}</div>
              </Link>
          </div>
        ))}
      </Carousel>
      </div>
  );
};

export default SongCarousel;