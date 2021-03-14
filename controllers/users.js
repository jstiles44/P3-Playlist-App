const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const db = require('../db/connection')
const Song = require('../models/song')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const SALT_ROUNDS = 11
const TOKEN_KEY = 'areallylonggoodkey'

const signUp = async (req, res) => {
  try {
    const { username, email, password, playlist } = req.body
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS)
    const user = new User({
      username,
      email,
      password_digest
    })
    
    await user.save()

    const payload = {
      username: user.username,
      email: user.email
    }

    const token = jwt.sign(payload, TOKEN_KEY)
    res.status(201).json({ token })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const signIn = async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({ username: username })
    if (await bcrypt.compare(password, user.password_digest)) {
      const payload = {
        username: user.username,
        email: user.email,
        playlist: user.playlist,
        id: user._id
      }

      const token = jwt.sign(payload, TOKEN_KEY)
      res.status(201).json({ token })
    } else {
      res.status(401).send('Invalid Credentials')
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const verify =  async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1]
    const payload = jwt.verify(token, TOKEN_KEY)
    const user = await User.findOne({ username: payload.username })
    const newPayload = {
      username: user.username,
      email: user.email,
      playlist: user.playlist,
      id: user._id
    }
      if(payload) {
          res.json(newPayload)
      }
  } catch (e) {
      res.status(401).send('Not Authorized')
  }
}

const changePassword = async (req, res) => { }



const addSong = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    const song = await Song.findById(req.body._id)
    user.playlist.push(song)
    await user.save()
    const userPayload = { 
      username: user.username,
      email: user.email,
      playlist: user.playlist,
      id: user._id
  }
    res.json(userPayload)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// const addClick = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id)
//     const songClicked = await Song.findById(req.body.song)
//     console.log("before adding song", user.playlist)

//     const updatedSong = user.playlist.find((song) => {
//       if (song._id.equals(songClicked._id)) {
//         console.log("song in playlist", song)
//         return {
//           "title": song.title,
//           "artist": song.artist,
//           "releaseYear": song.releaseYear,
//           "genre": song.genre,
//           "albumCover": song.albumCover,
//           "album": song.album,
//           "songLength": song.songLength,
//           "songLink": song.songLink,
//           "userClicks": song.userClicks++
//         } 
//           return song
//       }
//     })
  
//     await user.save()
//     console.log("after pushing song", user.playlist)
//     const userPayload = {
//       username: user.username,
//       email: user.email,
//       playlist: user.playlist,
//       id: user._id
//     }
//     res.json(userPayload)
//   } catch (error) {
//     res.status(500).json({ error: error.message })
//   }
// }

const addClick = async (req, res) => {
  try {
  const user = await User.findById(req.params.id)
  const songClicked = await Song.findById(req.body.song)
  console.log("user playlist before logic", user.playlist)
 const userPlaylist = []

    user.playlist.map((song) => {
      // console.log(song)
      (song._id.equals(songClicked._id)) ? userPlaylist.push(
        {
          "_id": song._id,
          "title": song.title,
          "artist": song.artist,
          "releaseYear": song.releaseYear,
          "genre": song.genre,
          "albumCover": song.albumCover,
          "album": song.album,
          "songLength": song.songLength,
          "songLink": song.songLink,
          "userClicks": song.userClicks + 1
        }) : userPlaylist.push({
          "_id": song._id,
          "title": song.title,
          "artist": song.artist,
          "releaseYear": song.releaseYear,
          "genre": song.genre,
          "albumCover": song.albumCover,
          "album": song.album,
          "songLength": song.songLength,
          "songLink": song.songLink,
          "userClicks": song.userClicks
        })
    })
      
    console.log("Updated playlist after logic", userPlaylist)

    user.playlist = userPlaylist

    await user.save()
    console.log("Updated playlist after Save", user.playlist)
      const userPayload = {
        username: user.username,
        email: user.email,
        playlist: user.playlist,
        id: user._id
      }
      res.json(userPayload)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }




const deleteSong = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    const downSong = await Song.findById(req.body.song)

    const userPlaylist = user.playlist.filter(song => {
      return !song._id.equals(downSong._id)
    })
    
    user.playlist = userPlaylist
    await user.save()
    const userPayload = {
      username: user.username,
      email: user.email,
      playlist: user.playlist,
      id: user._id
    }
    res.json(userPayload)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
  
  module.exports = {
    signUp,
    signIn,
    verify,
    changePassword,
    addSong,
    deleteSong,
    addClick
}