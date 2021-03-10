import Layout from "../../components/Shared/layout/Layout";
import SongPlaylist from "../../components/playlist/SongPlaylist";

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
      <div>hi {props.user.username}</div>
      <div>{playlistSongsJSX}</div>
    </Layout>
  );
};

export default Profile;
