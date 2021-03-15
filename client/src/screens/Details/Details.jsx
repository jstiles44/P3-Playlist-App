import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getSong, updateSong } from "../../services/songs";
import Layout from "../../components/Shared/layout/Layout";
import { addSong } from "../../services/users";
import "./Details.css";
import { Link } from "react-router-dom";
// import { updateSong } from "../../../../controllers/songs";
import ReviewForm from '../../components/ReviewForm/ReviewForm';
import StarRating from 'star-rating-react'

const Details = (props) => {
  const [song, setSong] = useState(null);
  const [review, setReview] = useState({
    rating: 0,
  })
  const { id } = useParams();
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchSong = async () => {
      const song = await getSong(id);
      setSong(song);
      setLoaded(true);
    };
    fetchSong();
  }, [id]);

  const handleChange = (event) => {
    const { rating, value } = event.target
    console.log(event.target)
    setReview({
      ...review,
      "rating": value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    song.reviews.push(review)
    setSong(song)
    await updateSong(id, song)
  }

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  const addToPlaylist = async () => {
    const response = await addSong(props.user.id, song);
    props.setUser(response);
  };

  const preventAdd = () => {
    alert("Cannot Add Duplicate Song");
  };

  const unauthenticatedOptions = (
    <>
      <Link to="/sign-in">
        <div className="login_to_edit">
          <button className=" button_slide slide_right">
            Login to edit your playlist
          </button>
        </div>
      </Link>
    </>
  );

  const authenticatedOptions = (
    <>
      <button
        className="button_slide slide_right"
        onClick={
          props.user.playlist.find((songPlaylist) => {
            return songPlaylist._id === song._id;
          })
            ? preventAdd
            : addToPlaylist
        }
      >
        Add to Playlist
      </button>
    </>
  );

  return (
    <Layout user={props.user}>
      <div className="song-details">
        <img
          className="details-album-art"
          src={song.albumCover}
          alt={"album art for this song"}
        />
        <div className="detail">
          <div classname="text">
            <div className="title">{song.title}</div>
            <div className="artist">by {song.artist}</div>
            <div className="album">from the album {song.album}</div>
            <div className="genre">Genre: {song.genre}</div>
            <div className="release-year">Release Year: {song.releaseYear}</div>
            <div className="song-length">Length: {song.songLength}</div>
            <div name="rating" className="rating"><StarRating className="stars" name="rating" size={song.rating} value={song.rating} onChange={ function(val) { console.log(val) }} /></div>
          </div>
          <div className="button-container">
            {props.user ? authenticatedOptions : unauthenticatedOptions}
          </div>
          <div className="reviews-wrapper">
          <ReviewForm rating={review.rating} onSubmit={handleSubmit} onChange={handleChange} />
        </div>
        </div>
        <iframe
          className="audio"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${song.songLink}`}
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </Layout>
  );
};

export default Details;
