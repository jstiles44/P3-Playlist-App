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
        "albumCover": "https://imgur.com/Bhm75fS.png",
        "album": "Electric Ladyland",
        "songLength": "4:01",
        "songLink": "TLV4_xaYynY",
        "userClicks": 0,
        "globalListens": 0,
        "reviews": []
        },
        {
        "title": "Levels",
        "artist": "Avicii",
        "releaseYear": "2011",
        "genre": "House",
        "albumCover": "https://imgur.com/CLE7CM2.png",
        "album": "Levels Single",
          "songLength": "5:39",
          "songLink": "374sYMQugSI",
          "userClicks": 0,
        "globalListens": 0,
        "reviews": []
        },
        {
        "title": "Cigarette Daydreams",
        "artist": "Cage the Elephant",
        "releaseYear": "2013",
        "genre": "Alternative Rock",
        "albumCover": "https://imgur.com/zBXt3yu.png",
        "album": "Melophobia",
          "songLength": "3:29",
          "songLink": "vAu4WIK-VfM",
          "userClicks": 0,
        "globalListens": 0,
        "reviews": []
      },
      {
        "title": "Decks Dark",
        "artist": "Radiohead",
        "releaseYear": "2016",
        "genre": "Alternative",
        "albumCover": "https://imgur.com/jIOPCvG.png",
        "album": "A Moon Shaped Pool",
        "songLength": "4:41",
        "songLink": "Del3C2W63Pk",
        "userClicks": 0,
        "globalListens": 0,
        "reviews": []
        },
    {
        "title": "Ghost Ship",
        "artist": "Blur",
        "releaseYear": "2015",
        "genre": "Alternative",
        "albumCover": "https://imgur.com/TODoa12.png",
        "album": "The Magic Whip",
      "songLength": "4:59",
      "songLink": "ql0ejO9Pkdk",
      "userClicks": 0,
      "globalListens": 0,
      "reviews": []
        },
    {
        "title": "Inertia Creeps",
        "artist": "Massive Attack",
        "releaseYear": "1998",
        "genre": "Trip hop",
        "albumCover": "https://imgur.com/UrkFM5X.png",
        "album": "Mezzanine",
      "songLength": "5:57",
      "songLink": "w3mn7EC-skg",
      "userClicks": 0,
      "globalListens": 0,
      "reviews": []
      },
      {
        "title": "Use Me",
        "artist": "Bill Withers",
        "releaseYear": "1972",
        "genre": "Soul",
        "albumCover": "https://imgur.com/riqUrXE.png",
        "album": "Still Bill",
        "songLength": "3:45",
        "songLink": "g3hBYTkI-sE",
        "userClicks": 0,
        "globalListens": 0,
        "reviews": []
      },
      {
        "title": "3 Nights",
        "artist": "Dominic Fike",
        "releaseYear": "2018",
        "genre": "Alternative/Indie",
        "albumCover": "https://imgur.com/SDzLsoj.png",
        "album": "Don't Forget About Me, Demos",
        "songLength": "4:19",
        "songLink": "OWKzRngush4",
        "userClicks": 0,
        "globalListens": 0,
        "reviews": []
      },
      {
        "title": "In Da Club",
        "artist": "50 Cent",
        "releaseYear": "2003",
        "genre": "Hip-Hop/Rap",
        "albumCover": "https://imgur.com/4a4Oaty.png",
        "album": "Get Rich or Die Tryin'",
        "songLength": "4:07",
        "songLink": "5qm8PH4xAss",
        "userClicks": 0,
        "globalListens": 0,
        "reviews": []
      },
      {
        "title": "Youngblood",
        "artist": "5 Seconds of Summer",
        "releaseYear": "2018",
        "genre": "Pop rock",
        "albumCover": "https://imgur.com/4FWnc9T.png",
        "album": "Youngblood",
        "songLength": "3:23",
        "songLink": "CXNv4_wQjKQ",
        "userClicks": 0,
        "globalListens": 0,
        "reviews": []
      },
      {
        "title": "We Got The Whip",
        "artist": "Audioslave",
        "releaseYear": "2002",
        "genre": "Alternative Rock",
        "albumCover": "https://imgur.com/BPS4Idk.png",
        "album": "Cochise",
        "songLength": "4:06",
        "songLink": "ZOK7Uc241bI",
        "userClicks": 0,
        "globalListens": 0,
        "reviews": []
      },
      {
        "title": "Carry Out",
        "artist": "Timbaland feat. Justin Timberlake",
        "releaseYear": "2009",
        "genre": "Hip Hop",
        "albumCover": "https://imgur.com/I2m3Srq.png",
        "album": "Shock Value II",
        "songLength": "3:54",
        "songLink": "NRdHsuuXxfk",
        "userClicks": 0,
        "globalListens": 0,
        "reviews": []
      },
      {
        "title": "Ramble On",
        "artist": "Led Zeppelin",
        "releaseYear": "1969",
        "genre": "Classic Rock",
        "albumCover": "https://imgur.com/MS9HVE0.png",
        "album": "Led Zeppelin II",
        "songLength": "4:34",
        "songLink": "LzGBQerkvWs",
        "userClicks": 0,
        "globalListens": 0,
        "reviews": []
      },
      {
        "title": "Panama",
        "artist": "Van Halen",
        "releaseYear": "1984",
        "genre": "Hard Rock",
        "albumCover": "https://imgur.com/PxNXbO4.png",
        "album": "1984",
        "songLength": "3:40",
        "songLink": "zYD892875o",
        "userClicks": 0,
        "globalListens": 0,
        "reviews": []
      },
      {
        "title": "Live Forever",
        "artist": "Oasis",
        "releaseYear": "1994",
        "genre": "Britpop",
        "albumCover": "https://imgur.com/5Jzk1Lz.png",
        "album": "Definitely Maybe",
        "songLength": "4:39",
        "songLink": "TDe1DqxwJoc",
        "userClicks": 0,
        "globalListens": 0,
        "reviews": []
      },
      {
        "title": "Stereo Love",
        "artist": "Edward Maya & Vika Jigulina",
        "releaseYear": "2009",
        "genre": "Dance",
        "albumCover": "https://imgur.com/v7npMwu.png",
        "album": "The Stereo Love Show",
        "songLength": "4:12",
        "songLink": "Z3YrHJ1sU",
        "userClicks": 0,
        "globalListens": 0,
        "reviews": []
      },
      {
        "title": "Wish You Were Here",
        "artist": "Incubus",
        "releaseYear": "2001",
        "genre": "Hard Rock",
        "albumCover": "https://imgur.com/4V4ZqGi.png",
        "album": "Morning View",
        "songLength": "3:34",
        "songLink": "mZnUYsqw8BA",
        "userClicks": 0,
        "globalListens": 0,
        "reviews": []
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