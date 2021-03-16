import "./Favorites.css"

const Favorites = (props) => {

  
  
  return (
    <div className="favorites-song">
      <img className="favorites-albumCover" src={props.imgURL} alt={props.title}/>
      <div className="playlist-favorites-title">{props.title} by {props.artist }</div>
  </div>
  )
}

export default Favorites 