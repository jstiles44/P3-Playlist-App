import "./Song.css"
import { Link } from "react-router-dom"

const Song = (props) => {
  return (
    <>
      <Link className="song-explore" to={`/explore/${props._id}`}>
        <img className="album-cover-explore" src={props.albumCover} alt={props.title} />
        <div className="title-explore">{props.title}</div>
        <div className="artist-explore"> {props.artist}</div>
      </Link>  
    </>
  )
}

export default Song