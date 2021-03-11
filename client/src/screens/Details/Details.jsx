import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getSong } from "../../services/songs";
import Layout from "../../components/Shared/layout/Layout";
import { addSong } from "../../services/users";
import "./Details.css";

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
          <button
            className="button_slide slide_right"
            // className="add-to-playlist"
            onClick={addToPlaylist}
          >
            Add to Playlist
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Details;
