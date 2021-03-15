import { useState, useEffect } from "react";
import { getSongs } from "../../services/songs.js";
import Layout from "../../components/Shared/layout/Layout.jsx";
import SongCarousel from "../../components/Carousels/songCarousel/songCarousel.jsx";
import SongCarousel2 from "../../components/Carousels/songCarousel2/songCarousel2.jsx";
import ImageCarousel from "../../components/Carousels/ImageCarousel/ImageCarousel.jsx";
import { ratingSort } from "../../utils/sort";
import "./Home.css";

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
      setTopRated(songs.slice())
    };
    fetchSongs();
  }, []);
  const topRatedJSX = ratingSort(topRated).slice(0, 5); 
  return (
    <Layout user={props.user}>
      <div className="home-body">
        <div className="home-carousels">
          <div className="home-text-images">
            <div className="welcome-text">
              Welcome our website, bla bla bla bla bla bla bla?!
            </div>
            <ImageCarousel />
          </div>
          <div className="songCarousels">
            <div className="home-carousel-songs">
              <SongCarousel recentlyAdded={recentlyAdded} />
            </div>
            <div className="home-carousel-songs2">
              <SongCarousel2 topRated={topRatedJSX} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
