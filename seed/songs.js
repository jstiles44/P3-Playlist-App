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
      {
        "title": "Decks Dark",
        "artist": "Radiohead",
        "releaseYear": "2016",
        "genre": "Alternative",
        "albumCover": "http://images.genius.com/c9cf30826b50b5096664895e243253ad.1000x1000x1.jpg",
        "album": "A Moon Shaped Pool",
        "songLength": "4:41",
        },
    {
        "title": "Ghost Ship",
        "artist": "Blur",
        "releaseYear": "2015",
        "genre": "Alternative",
        "albumCover": "https://images.genius.com/63bdd1821deba36e8ddaf164840dffd1.562x562x1.jpg",
        "album": "The Magic Whip",
        "songLength": "4:59",
        },
    {
        "title": "Inertia Creeps",
        "artist": "Massive Attack",
        "releaseYear": "1998",
        "genre": "Trip hop",
        "albumCover": "https://www.udiscovermusic.com/wp-content/uploads/2019/04/Massive-Attack-Mezzanine-album-cover-web-optimised-820.jpg",
        "album": "Mezzanine",
        "songLength": "5:57",
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