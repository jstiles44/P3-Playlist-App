import Layout from "../../components/Shared/layout/Layout";
import SongPlaylist from "../../components/playlist/SongPlaylist";
import { useState, useEffect } from "react";
import "./Profile.css";
import Favorites from "../../components/playlist/Favorites"

const Profile = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const { playlist } = props.user;

  const playlistSongsJSX = playlist.map((song) => (
    <SongPlaylist
      title={song.title}
      artist={song.artist}
      songLength={song.songLength}
      songId={song._id}
      userId={props.user.id}
      setUser={props.setUser}
    />
  ));

  const playlistFavoritesJSX = playlist.slice(0, 3).map((song) => (
    <Favorites
      // id={song._id}
      title={song.title}
      albumCover={song.albumCover}
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
            <div className="playlist-label-play">Play</div>

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
          <div className="favorites-label">Your Favorites:</div>
          {loading ? (
            <div className="loading-container">
              <div className="loader"></div>
            </div>
          ) : (
            <div className="favorites-box">{playlistFavoritesJSX}</div>
          )}
        </div>
        {/* <div className="analytics-profile">
          {loading ? (
            <div className="loading-container">
              <div className="loader"></div>
            </div>
          ) : (
            <div>test</div>
          )}
        </div> */}
         <div className="player-window">
          {loading ? (
            <div className="loading-container">
              <div className="loader"></div>
            </div>
          ) : (
              <div>
                <iframe className="profile-player" width="358.72" height="300" src="https://www.youtube.com/embed/2N9fOZuI0gQ" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
