const Song = require('../models/song')
const db = require('../db/connection')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const getSongs = async (req, res) => {
  try {
    const songs = await Song.find()
    res.json(songs)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getSong = async (req, res) => {
  try {
    const { id } = req.params
    const song = await Song.findById(id)
    if (song) {
      return res.json(song)
    }
    res.status(404).json({ message: 'Song not found!'})
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const createSong = async (req, res) => {
  try {
    const song = await new Song(req.body)
    await song.save()
    res.status(201).json(song)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

const updateSong = async (req, res) => {
  const { id } = req.params
  await Song.findByIdAndUpdate(id, req.body, { new: true }, (error, song) => {
    if (error) {
      return res.status(500).json({ error: error.message })
    }
    if (!song) {
      return res.status(404).json({ message: 'Song not found!'})
    }
    res.status(200).json(song)
  })
}

const deleteSong = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Song.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Song deleted')
    }
    throw new Error('Song not found')
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
//
const deleteSongFromPlaylist = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Song.findByIdAndUpdate(id);
    if (deleted) {
      return res.status(200).send("Song Deleted")
    }
    throw new Error("Song Not Found")
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

module.exports = {
  createSong,
  getSongs,
  getSong,
  updateSong,
  deleteSong
}