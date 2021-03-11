import "./SongPlaylist.css"


const SongPlaylist = (props) => {
  return (
    <div className="playlist-song">
      <div className="playlist-song-title">{props.title}</div>
      <div className="playlist-song-artist">{props.artist} </div>
      <div className="playlist-song-length">{props.songLength}</div>
      <div className="playlist-song-rating">rating</div>
      <div className="playlist-song-delete">X</div> 
    </div>
  )
}
export default SongPlaylist