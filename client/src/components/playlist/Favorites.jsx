import "./Favorites.css"

const Favorites = (props) => {

  
  
  return (
    <div className="favorites-song">
      <img className="favorites-albumCover" src={props.albumCover} />
      <div className="playlist-favorites-title">{props.title}</div>
  </div>
  )
}

export default Favorites 