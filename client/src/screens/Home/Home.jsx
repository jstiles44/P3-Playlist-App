import { useState, useEffect } from 'react';
import { getSongs } from '../../services/songs.js';
import Layout from '../../components/Shared/layout/Layout.jsx';
import SongCarousel from "../../components/Carousels/songCarousel/songCarousel.jsx";
import ImageCarousel from "../../components/Carousels/ImageCarousel/ImageCarousel.jsx";
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
      setRecentlyAdded(recentlyAdded);
    }
    fetchSongs()
  }, []);


  return (
    <Layout user={props.user}>
      <div className='home-body'>

      <SongCarousel recentlyAdded={recentlyAdded}/>

      <ImageCarousel />
        
      </div>

      </Layout>
  );
};

export default Home;