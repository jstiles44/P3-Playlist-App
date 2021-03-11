import Layout from "../../components/Shared/layout/Layout";
import SongPlaylist from "../../components/playlist/SongPlaylist";
import { useState, useEffect } from "react";
import "./Profile.css";

const Profile = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const { playlist } = props.user;

  const playlistSongsJSX = playlist.map((song) => (
    <SongPlaylist
      title={song.title}
      artist={song.artist}
      songLength={song.songLength}
    />
  ));

  return (
    <Layout user={props.user}>
      <div className="profile-container">
        <div className="playlist-container">
          <div className="playlist-labels">
            <div className="playlist-label-title">Title</div>{" "}
            <div className="playlist-label-artist">Artist</div>{" "}
            <div className="playlist-label-time">⏱</div>{" "}
            <div className="playlist-label-rating">Rating</div>
            <div className="playlist-label-delete">Delete</div>
          </div>
          {loading ? (
            <div className="loading-container">
              <div className="loader"></div>
            </div>
          ) : (
            <div>{playlistSongsJSX}</div>
          )}
        </div>

        <div className="favorites-profile">
          {loading ? (
            <div className="loading-container">
              <div className="loader"></div>
            </div>
          ) : (
            <div>test</div>
          )}{" "}
        </div>
        <div className="analytics-profile">
          {loading ? (
            <div className="loading-container">
              <div className="loader"></div>
            </div>
          ) : (
            <div>test</div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
