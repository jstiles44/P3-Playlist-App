import "./SongPlaylist.css"
import {deleteSong} from "../../services/users"


const SongPlaylist = (props) => {

  const deleteFromPlaylist = async () => {
    console.log(props.userId, props.songId)
      const response = await deleteSong(props.userId, props.songId);
    props.setUser(response);
   
  }
  return (
    <div className="playlist-song">
      <div className="playlist-song-title">{props.title}</div>
      <div className="playlist-song-artist">{props.artist} </div>
      <div className="playlist-song-length">{props.songLength}</div>
      <div className="playlist-song-rating">rating</div>
      <div className="playlist-song-delete" onClick={deleteFromPlaylist}>X</div> 
    </div>
  )
}
export default SongPlaylist