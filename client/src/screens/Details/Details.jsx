import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getSong } from "../../services/songs";
import Layout from "../../components/Shared/layout/Layout";
import { addSong } from "../../services/users";
import "./Details.css";
import { Link } from "react-router-dom";

const Details = (props) => {
  const [song, setSong] = useState(null);
  const { id } = useParams();
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchSong = async () => {
      const song = await getSong(id);
      setSong(song);
      setLoaded(true);
    };
    fetchSong();
  }, [id]);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  const addToPlaylist = async () => {
    const response = await addSong(props.user.id, song);
    props.setUser(response);
  };

  const unauthenticatedOptions = (
    <>
      <Link to="/sign-in">
        <div className="login_to_edit">
          <button className=" button_slide slide_right">
            Login to edit your playlist
          </button>
        </div>
      </Link>
    </>
  );

  const authenticatedOptions = (
    <>
      <button className="button_slide slide_right" onClick={addToPlaylist}>
        Add to Playlist
      </button>
    </>
  );

  return (
    <Layout user={props.user}>
      <div className="song-details">
        <img
          className="details-album-art"
          src={song.albumCover}
          alt={"album art for this song"}
        />
        <div className="detail">
          <div classname="text">
            <div className="title">{song.title}</div>
            <div className="artist">by {song.artist}</div>
            <div className="album">from the album {song.album}</div>
            <div className="genre">Genre: {song.genre}</div>
            <div className="release-year">Release Year: {song.releaseYear}</div>
            <div className="song-length">Length: {song.songLength}</div>
          </div>
          <div className="button-container">
            {props.user ? authenticatedOptions : unauthenticatedOptions}
          </div>
        </div>
        <iframe
          className="audio"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${song.songLink}`}
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </Layout>
  );
};

export default Details;
