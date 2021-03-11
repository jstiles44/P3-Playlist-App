import Layout from "../../components/Shared/layout/Layout";
import SongPlaylist from "../../components/playlist/SongPlaylist";
import "./Profile.css";

const Profile = (props) => {
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
            Title: Artist: ⏱ Rating: Delete:
          </div>

          {playlistSongsJSX}
        </div>

        <div className="favorites-profile">test</div>
        <div className="analytics-profile">test</div>
      </div>
    </Layout>
  );
};

export default Profile;
