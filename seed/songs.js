const db = require('../db/connection')
const Song = require('../models/song')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const songs =
    [
      {
        "title": "All Along the Watchtower",
        "artist": "Jimi Hendrix",
        "releaseYear": "1968",
        "genre": "Classic Rock",
        "albumCover": "https://upload.wikimedia.org/wikipedia/en/f/f2/Jimi_Hendrix_-_Electric_Ladyland.jpg",
        "album": "Electric Ladyland",
        "songLength": "4:01",
        },
        {
        "title": "Levels",
        "artist": "Avicii",
        "releaseYear": "2011",
        "genre": "House",
        "albumCover": "https://upload.wikimedia.org/wikipedia/en/2/2c/Levelssong.jpg",
        "album": "Levels Single",
        "songLength": "5:39",
        },
        {
        "title": "Cigarette Daydreams",
        "artist": "Cage the Elephant",
        "releaseYear": "2013",
        "genre": "Alternative Rock",
        "albumCover": "https://upload.wikimedia.org/wikipedia/en/1/1e/Cage_the_Elephant_Melophobia.jpg",
        "album": "Melophobia",
        "songLength": "3:29",
      },
     
    ]
  await Song.insertMany(songs)
  console.log('Created songs!')
} 
const run = async () => {
  await main()
  db.close
}

run()