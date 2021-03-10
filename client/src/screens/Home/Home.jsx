import { useState, useEffect } from 'react';
import { getSongs } from '../../services/songs.js';
import Carousel from 'react-responsive-carousel';

const Home = () => {

  const [songs, setSongs] = useState([]);
  const [recentlyAdded, setRecentlyAdded] = useState([]);
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      const songs = await getSongs();
      setSongs(songs);
      // recently added songs are the first 5 songs that will be at the top of the array.
      setRecentlyAdded(songs.splice(0, 5))
    }
    fetchSongs()
  }, []);
  
  
  return (
    <div>
      <Carousel className='recently-added'>
        {recentlyAdded.map((song, index) => (
          <div key={index}>
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

export default Home;