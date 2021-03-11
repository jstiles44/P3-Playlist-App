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
        "albumCover": "https://i.imgur.com/QuJRMR7.jpg",
        "album": "Electric Ladyland",
        "songLength": "4:01",
        },
        {
        "title": "Levels",
        "artist": "Avicii",
        "releaseYear": "2011",
        "genre": "House",
        "albumCover": "https://i.imgur.com/QuJRMR7.jpg",
        "album": "Levels Single",
        "songLength": "5:39",
        },
        {
        "title": "Cigarette Daydreams",
        "artist": "Cage the Elephant",
        "releaseYear": "2013",
        "genre": "Alternative Rock",
        "albumCover": "https://i.imgur.com/QuJRMR7.jpg",
        "album": "Melophobia",
        "songLength": "3:29",
      },
      {
        "title": "Decks Dark",
        "artist": "Radiohead",
        "releaseYear": "2016",
        "genre": "Alternative",
        "albumCover": "https://i.imgur.com/QuJRMR7.jpg",
        "album": "A Moon Shaped Pool",
        "songLength": "4:41",
        },
    {
        "title": "Ghost Ship",
        "artist": "Blur",
        "releaseYear": "2015",
        "genre": "Alternative",
        "albumCover": "https://i.imgur.com/QuJRMR7.jpg",
        "album": "The Magic Whip",
        "songLength": "4:59",
        },
    {
        "title": "Inertia Creeps",
        "artist": "Massive Attack",
        "releaseYear": "1998",
        "genre": "Trip hop",
        "albumCover": "https://i.imgur.com/QuJRMR7.jpg",
        "album": "Mezzanine",
        "songLength": "5:57",
      },
      {
        "title": "Use Me",
        "artist": "Bill Withers",
        "releaseYear": "1972",
        "genre": "Soul",
        "albumCover": "https://i.imgur.com/QuJRMR7.jpg",
        "album": "Still Bill",
        "songLength": "3:45",
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