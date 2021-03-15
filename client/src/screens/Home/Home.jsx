import { useState, useEffect } from "react";
import { getSongs } from "../../services/songs.js";
import Layout from "../../components/Shared/layout/Layout.jsx";
import SongCarousel from "../../components/Carousels/songCarousel/songCarousel.jsx";
import SongCarousel2 from "../../components/Carousels/songCarousel2/songCarousel2.jsx";
import ImageCarousel from "../../components/Carousels/ImageCarousel/ImageCarousel.jsx";
import { ratingSort, listensSort } from "../../utils/sort";
import "./Home.css";

const Home = (props) => {
  const [topListened, setTopListened] = useState([]);
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      const songs = await getSongs();
      setTopListened(songs.slice());
      setTopRated(songs.slice())
    };
    fetchSongs();
  }, []);

  const topRatedJSX = ratingSort(topRated).slice(0, 5);

  const topListenedJSX = listensSort(topListened).slice(0, 5)

  console.log(topRatedJSX)

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
              <SongCarousel recentlyAdded={topListenedJSX} />
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
