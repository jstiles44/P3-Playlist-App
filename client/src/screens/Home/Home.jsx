import { useState, useEffect } from 'react';
import { getSongs } from '../../services/songs.js';
import { Carousel } from 'react-responsive-carousel';
import Layout from '../../components/Shared/layout/Layout.jsx'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Home.css'

const Home = (props) => {

  const [songs, setSongs] = useState([]);
  const [recentlyAdded, setRecentlyAdded] = useState([]);
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      const songs = await getSongs();
      setSongs(songs);
      // recently added songs are the first 5 songs that will be at the top of the array.
      const recentlyAdded = songs.splice(0, 5);
      setRecentlyAdded(recentlyAdded)
    }
    fetchSongs()
  }, []);

  const settings = {
    showArrows: false,
    showThumbs: true,
    centerMode: true,
    axis: 'vertical',
  }
  
  return (
    <Layout user={props.user}>
      <Carousel settings={{...settings}} className='recently-added'>
        {recentlyAdded.map((song, index) => (
          <div style={{height: '300px', width: '300px'}} key={index}>
            <img src={song.albumCover} alt={song.album}
              className='album-art' />
            <div className='album-title'>{song.title}</div>
            <div className='artist'>{song.artist}</div>
          </div>
        ))}
      </Carousel>

      <Carousel className='images'>
        <img src='https://i.imgur.com/wvvfWUb.jpg' />
        <img src='https://i.imgur.com/YKIbM90.jpg' />
      </Carousel>

      </Layout>
  );
};

export default Home;