import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getSong } from "../../services/songs";
import Layout from "../../components/Shared/layout/Layout";

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

  return (
    <Layout user={props.user}>
      <div className="song-details">
        <img
          className="album-art"
          src={song.albumCover}
          alt={"album art for this song"}
        />
        <div className="detail">
          <div className="name">{song.title}</div>
          <div className="album">{song.album}</div>
          <div className="genre">{song.genre}</div>
          <div className="release-year">{song.releaseYear}</div>
          <div className="song-length">{song.songLength}</div>
          <button className="add-to-playlist">
            <Link className="add-to-playlist-link" to={`/`}>
              Add to Playlist
            </Link>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Details;
