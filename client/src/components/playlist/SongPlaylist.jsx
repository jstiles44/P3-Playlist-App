import "./SongPlaylist.css"
import {useState} from "react"
import { deleteSong, addClick } from "../../services/users"


const SongPlaylist = (props) => {

  const deleteFromPlaylist = async () => {
    console.log(props.userId, props.songId)
      const response = await deleteSong(props.userId, props.songId);
    props.setUser(response);
  }

  const handleDoubleClick = () => {

    addClickToSong()
    play()
  }

  const addClickToSong = async () => {    
    const response = await addClick(props.userId, props.songId)
  }

  const play = () => {
    console.log(props.songLink)
    props.setSongToPlay(props.songLink)
  }
  
  return (
    <div className="playlist-song" onDoubleClick={handleDoubleClick}>
      <div className="playlist-song-title">{props.title}</div>
      <div className="playlist-song-artist">{props.artist} </div>
      <div className="playlist-song-length">{props.songLength}</div>
      <div className="playlist-song-rating">{props.releaseYear}</div>
      <div className="playlist-song-delete" onClick={deleteFromPlaylist}>X</div> 
      {/* <div className="playlist-song-play" onDoubleClick={play}>▶</div>  */}
    </div>
  )
}
export default SongPlaylist