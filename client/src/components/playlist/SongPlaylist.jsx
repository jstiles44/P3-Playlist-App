
import "./SongPlaylist.css"
import {useState} from "react"
import { deleteSong, addClick } from "../../services/users"
import {editSong} from "../../services/songs"


const SongPlaylist = (props) => {
  const deleteFromPlaylist = async () => {
    const response = await deleteSong(props.userId, props.songId);
    props.setPlaylist(response);
  };

  const play = (e) => {
    let x = props.index;
    props.setSongToPlay(props.songLink);
    const changeSong = () => {
      if (props.autoPlay === true) {
        props.setSongToPlay(props.playlist[x + 1].songLink);
        let timeout = convertTime(props.playlist[x + 1].songLength) * 1000;
        if (x < props.playlist.length - 2) {
          x++;
          setTimeout(changeSong, timeout);
        }
      }
    };
    const convertTime = (str) => {
      //sourced from https://stackoverflow.com/questions/9640266/convert-hhmmss-string-to-seconds-only-in-javascript
      let p = str.split(":"),
        s = 0,
        m = 1;
      while (p.length > 0) {
        s += m * parseInt(p.pop(), 1000);
        m *= 60;
      }
      return s;
    };
    let timeout = convertTime(props.songLength) * 1000;
    if (x < props.playlist.length - 1) {
      setTimeout(changeSong, timeout);
    }
  };

  const handleDoubleClick = () => {
  
    addClickToSong()
    addGlobalListen()
    play()
  }

  const addClickToSong = async () => {
    console.log(props.songId)
    const response = await addClick(props.userId, props.songId)
  }

  
  const addGlobalListen = async () => {
    console.log(props.songId)
    const response = await editSong(props.songId)
    
  }
  

  return (
    <div className="playlist-song" onDoubleClick={handleDoubleClick}>
      <div className="playlist-song-title">{props.title}</div>
      <div className="playlist-song-artist">{props.artist} </div>
      <div className="playlist-song-length">{props.songLength}</div>
      <div className="playlist-song-rating">{props.releaseYear}</div>
      <div className="playlist-song-delete" onClick={deleteFromPlaylist}>
        X
      </div>
    </div>
  );
};
export default SongPlaylist;


