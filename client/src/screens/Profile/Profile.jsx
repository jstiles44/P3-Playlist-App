import Layout from "../../components/Shared/layout/Layout";
import SongPlaylist from "../../components/playlist/SongPlaylist";
import SongPlayer from "../../components/songPlayer/SongPlayer";
import { useState, useEffect } from "react";
import "./Profile.css";
import Favorites from "../../components/playlist/Favorites";
import { clickSort } from "../../utils/sort";

const Profile = (props) => {
  const [loading, setLoading] = useState(true);
  const [songToPlay, setSongToPlay] = useState();
  const [favoriteSongs, setFavoriteSongs] = useState([]);
  const [autoPlay, setAutoPlay] = useState(false);

  const { playlist } = props.user;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    setFavoriteSongs(props.user.playlist.slice());
  }, []);


  const playlistSongsJSX = playlist.map((song, index) => (
    <SongPlaylist
      title={song.title}
      artist={song.artist}
      songLength={song.songLength}
      userClicks={song.userClicks}
      album={song.album}
      albumCover={song.albumCover}
      releaseYear={song.releaseYear}
      genre={song.genre}
      songId={song._id}
      userId={props.user.id}
      setUser={props.setUser}
      songLink={song.songLink}
      setSongToPlay={setSongToPlay}
      playlist={playlist}
      index={index}
      user={props.user}
      autoPlay={autoPlay}
    />
  ));

  const songPlayerJSX = (
    <div>
      <SongPlayer songToPlay={songToPlay} />
    </div>
  );

  const playlistFavoritesJSX = clickSort(favoriteSongs)
    .slice(0, 3)
    .map((song) => (
      <Favorites title={song.title} albumCover={song.albumCover} />
    ));

  const handleClickAutoplay = () => {
    setAutoPlay(!autoPlay);
    setSongToPlay();
  };

  const autoPlayButton = (
    <input type="checkbox" value="false" onClick={handleClickAutoplay} />
  );

  const handleClickStop = () => {
    setSongToPlay();
    if (autoPlay === true) {
      window.location.reload(false);
    }
  };

  return (
    <Layout user={props.user}>
      <div className="profile-container">
        <div className="playlist-container">
          <div className="playlist-labels">
            <div className="playlist-label-title">Title</div>{" "}
            <div className="playlist-label-artist">Artist</div>{" "}
            <div className="playlist-label-time">⏱</div>{" "}
            <div className="playlist-label-rating">Released</div>
            <div className="playlist-label-delete">Delete</div>
            {/* <div className="playlist-label-play">Play</div> */}
            <div className="autoButton">{autoPlayButton}</div>
            <button className="stop" onClick={handleClickStop} />
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
        {autoPlay ? (
          <div className="player-cover">
            <div className="player-window">
              {loading ? (
                <div className="loading-container">
                  <div className="loader"></div>
                </div>
              ) : (
                <div className="songPlayer">{songPlayerJSX}</div>
              )}
            </div>
          </div>
        ) : (
          <div className="player-window">
            {loading ? (
              <div className="loading-container">
                <div className="loader"></div>
              </div>
            ) : (
              <div className="songPlayer">{songPlayerJSX}</div>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Profile;
