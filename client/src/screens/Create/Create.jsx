import "./Create.css";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import Layout from "../../components/Shared/layout/Layout";
import { createSong } from "../../services/songs.js";

const Create = (props) => {
  const [song, setSong] = useState({
    title: "",
    artist: "",
    releaseYear: "",
    genre: "",
    album: "",
    imgURL: "",
    songLink: "",
    songLength: "",
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSong({
      ...song,
      [name]: value,
    });
  };

  const songSplice = () => {
    const equals = song.songLink.indexOf("=");
    const ampersand = song.songLink.indexOf("&");
    song.songLink = song.songLink.substring(equals + 1, ampersand);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    song.songLink.includes("youtube.com")
      ? songSplice()
      : alert("Song URL must be a valid youtube link");
    await createSong(song);
    setCreated(true);
  };

  if (isCreated) {
    return <Redirect to={"/explore"} />;
  }

  return (
    <Layout user={props.user}>
      <div className="create-page">
        <div className="create-form-container" onSubmit={handleSubmit}>
          <img
            className="create-pic"
            src="https://images.unsplash.com/photo-1593698054590-a5b3a19565a3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="musician"
          />
            <form className="create-form">
              <div>
                <label htmlFor="title" className="create-label">
                  Title:
                </label>
                <input
                  className="create-inputs"
                  type="text"
                  required
                  name="title"
                  value={song.title}
                  placeholder="Enter Song Title"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="songLink" className="create-label">
                  {" "}
                  YouTube URL:{" "}
                </label>
                <input
                  className="create-inputs"
                  type="text"
                  required
                  name="songLink"
                  value={song.songLink}
                  placeholder="Enter Link To Song"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="songLength" className="create-label">
                  {" "}
                  Song Length:{" "}
                </label>
                <input
                  type="text"
                  className="create-inputs"
                  required
                  name="songLength"
                  value={song.songLength}
                  placeholder="Enter Year"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="artist" className="create-label">
                  Artist Name:
                </label>
                <input
                  type="text"
                  className="create-inputs"
                  required
                  name="artist"
                  value={song.artist}
                  placeholder="Artist Name:"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="album" className="create-label">
                  {" "}
                  Album Name:
                </label>
                <input
                  type="text"
                  className="create-inputs"
                  required
                  name="album"
                  value={song.album}
                  placeholder="Album Title"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="albumCover" className="create-label">
                  Cover Art Link:
                </label>
                <input
                  type="text"
                  className="create-inputs"
                  required
                  name="albumCover"
                  value={song.imgURL}
                  placeholder="Enter Link"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="genre" className="create-label">
                  {" "}
                  Genre:
                </label>
                <input
                  type="text"
                  className="create-inputs"
                  required
                  name="genre"
                  value={song.genre}
                  placeholder="Enter Genre"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="releaseYear" className="create-label">
                  {" "}
                  Release Year:{" "}
                </label>
                <input
                  type="text"
                  className="create-inputs"
                  required
                  name="releaseYear"
                  value={song.releaseYear}
                  placeholder="Enter Year"
                  onChange={handleChange}
                />
              </div>
              <button
                className="sign_in_button_slide sign_in_slide_right createButton"
                type="submit"
              >
                Submit Song
              </button>
            </form>
        </div>
      </div>
    </Layout>
  );
};

export default Create;
