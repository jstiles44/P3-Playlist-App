import "./SongPlayer.css";
import { useEffect } from "react";

const SongPlayer = (props) => {
  useEffect(() => {
    
  }, [props.songToPlay]);

  return (
    <div>
      <iframe
        className="embeddedPlayer"
        width="358.72"
        height="300"
        src={`https://www.youtube.com/embed/${props.songToPlay}`}
        frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};
export default SongPlayer;
