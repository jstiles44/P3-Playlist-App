import "./SongPlaylist.css";
import { deleteSong } from "../../services/users";

const SongPlaylist = (props) => {
  const deleteFromPlaylist = async () => {
    console.log(props.userId, props.songId);
    const response = await deleteSong(props.userId, props.songId);
    props.setUser(response);
  };

  const play = () => {
    let x = 0;
    const testArrayNextSongs = ["ql0ejO9Pkdk", "xSuDTcJy__c", "hjUA_e0ZG_U"];
    const testArrLength = [`${props.songLength}`, "4:50", "3:29", "4:15"];

    props.setSongToPlay(props.songLink);

    const changeSong = () => {
      props.setSongToPlay(testArrayNextSongs[x]);
      if (x < props.playlist.length) {
        x++;
        setTimeout(changeSong, timeout);
      }
    };

    const convertTime = (str) => {
      //sourced from https://stackoverflow.com/questions/9640266/convert-hhmmss-string-to-seconds-only-in-javascript
      let p = str.split(":"),
        s = 0,
        m = 1;
      while (p.length > 0) {
        s += m * parseInt(p.pop(), 10);
        m *= 60;
      }
      return s;
    };

    let timeout = convertTime(testArrLength[x]) * 10;
    setTimeout(changeSong, timeout);
  };

  return (
    <div className="playlist-song">
      <div className="playlist-song-title">{props.title}</div>
      <div className="playlist-song-artist">{props.artist} </div>
      <div className="playlist-song-length">{props.songLength}</div>
      <div className="playlist-song-rating">rating</div>
      <div className="playlist-song-delete" onClick={deleteFromPlaylist}>
        X
      </div>
      <div className="playlist-song-play" onClick={play}>
        ▶
      </div>
    </div>
  );
};
export default SongPlaylist;

// const play = () => {
//   props.setSongToPlay(props.songLink);
//   const changeSong = () => {props.setSongToPlay("ql0ejO9Pkdk");};
//   const convertTime = (str) => {
//         //sourced from https://stackoverflow.com/questions/9640266/convert-hhmmss-string-to-seconds-only-in-javascript
//     let p = str.split(":"),
//       s = 0,
//       m = 1;
//     while (p.length > 0) {
//       s += m * parseInt(p.pop(), 10);
//       m *= 60;
//     }
//     return s;
//   };
//   let timeout = convertTime(props.songLength) * 1000;
//   setTimeout(changeSong, timeout);
// };

// const play = () => {
//   const testArray = ['ql0ejO9Pkdk', 'xSuDTcJy__c', 'hjUA_e0ZG_U']
//   const testArrLength = [`${props.songLength}` ,'4:50','3:29','4:15']
//   let x = 0
//   while (x < props.playlist.length) {
//     props.setSongToPlay(props.songLink);
//     // console.log(props.setSongToPlay)
//     const changeSong = () => {props.setSongToPlay(`${testArray[x]}`);};
//     const convertTime = (str) => {
//           //sourced from https://stackoverflow.com/questions/9640266/convert-hhmmss-string-to-seconds-only-in-javascript
//       let p = str.split(":"),
//         s = 0,
//         m = 1;
//       while (p.length > 0) {
//         s += m * parseInt(p.pop(), 10);
//         m *= 60;
//       }
//       return s;
//     };
//     let timeout = convertTime(`${testArrLength[x]}`) * 1000;
//     console.log(timeout)
//     // setTimeout(changeSong, timeout);
//     x++
//   }
// };
