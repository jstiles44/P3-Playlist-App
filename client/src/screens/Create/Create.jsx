import './Create.css';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Layout from "../../components/Shared/layout/Layout"
import { addSong} from '../../services/songs.js'


const Create = (props) => {

  const [song, setSong] = useState({
    title: '',
    artist: '',
    releaseYear: '',
    genre: '',
    album: '',
    albumCover: '',
    songLink: '',
    songLength: ''
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSong({
      ...song,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const created = await addSong(song);
    setCreated(true)
  }

  if (isCreated) {
    return <Redirect to={'/explore'} />
  }

  return (
    <Layout user={props.user}>
      <div className='create-page'>
        <div className='create-image'>
          Add a song to share with the world!!
        <img height='600px'
            className='create-pic'
            src='https://images.unsplash.com/photo-1593698054590-a5b3a19565a3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' alt='musician' />
      </div>
      <div className='create-form' onSubmit={handleSubmit}>
        <form>
          <div>
        <label htmlFor='title' className='label' >Title:</label>
        <input type='text'
          required
          name='title'
          value={song.title}
          placeholder='Enter Song Title'
          onChange={handleChange} />
          </div>

          <div>
        <label htmlFor='songLink' className='label'> Link To Song: </label>
        <input type='text'
          required
          name='songLink'
          value={song.songLink}
          placeholder='Enter Link To Song'
          onChange={handleChange} />
          </div>
          
        <div> 
        <label htmlFor='songLength' className='label'> Song Length: </label>
        <input type='text'
          required
          name='songLength'
          value={song.songLength}
          placeholder='Enter Year'
          onChange={handleChange} />
          </div>
          
        <div>
        <label htmlFor='artist' className='label'>Artist Name:</label>
        <input type='text'
          required
          name='artist'
          value={song.artist}
          placeholder='Artist Name:'
            onChange={handleChange} />
        </div>

        <div>
        <label htmlFor='album' className='label'> Album Name:</label>
        <input type='text'
          required
          name='album'
          value={song.album}
          placeholder='Album Title'
          onChange={handleChange} />
        </div>
        
          <div>
        <label htmlFor='albumCover' className='label'>Cover Art Link:</label>
        <input type='text'
          required
          name='albumCover'
          value={song.albumCover}
          placeholder='Enter Link'
              onChange={handleChange} />
          </div>
          
        <div>
        <label htmlFor='genre' className='label'> Genre:</label>
        <input type='text'
          required
          name='genre'
          value={song.genre}
          placeholder='Enter Genre'
              onChange={handleChange} />
        </div>
        
        <div>
        <label htmlFor='releaseYear' className='label'> Release Year: </label>
        <input type='text'
          required
          name='releaseYear'
          value={song.releaseYear}
          placeholder='Enter Year'
          onChange={handleChange} />
          </div>
          
            <div>
              
        </div>
        
        <button className="sign_in_button_slide sign_in_slide_right" type="submit">Submit Song</button>
      </form>
        </div>
        </div>
      </Layout>
  );
};

export default Create;