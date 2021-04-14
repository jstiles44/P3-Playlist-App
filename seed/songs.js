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
        "imgURL": "https://i.imgur.com/Bhm75fS.png",
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
        "imgURL": "https://i.imgur.com/CLE7CM2.png",
        "album": "Levels Single",
          "songLength": "5:33",
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
          "imgURL": "https://i.imgur.com/zBXt3yu.png",
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
        "imgURL": "https://i.imgur.com/jIOPCvG.png",
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
        "imgURL": "https://i.imgur.com/TODoa12.png",
        "album": "The Magic Whip",
      "songLength": "4:51",
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
        "imgURL": "https://i.imgur.com/UrkFM5X.png",
        "album": "Mezzanine",
      "songLength": "6:05",
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
        "imgURL": "https://i.imgur.com/riqUrXE.png",
        "album": "Still Bill",
        "songLength": "4:50",
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
        "imgURL": "https://i.imgur.com/SDzLsoj.png",
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
        "imgURL": "https://i.imgur.com/4a4Oaty.png",
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
        "imgURL": "https://i.imgur.com/4FWnc9T.png",
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
        "imgURL": "https://i.imgur.com/BPS4Idk.png",
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
        "imgURL": "https://i.imgur.com/I2m3Srq.png",
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
        "imgURL": "https://i.imgur.com/MS9HVE0.png",
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
        "imgURL": "https://i.imgur.com/PxNXbO4.png",
        "album": "1984",
        "songLength": "3:40",
        "songLink": "-zYD892875o",
        "userClicks": 0,
        "globalListens": 0,
        "reviews": []
      },
      {
        "title": "Live Forever",
        "artist": "Oasis",
        "releaseYear": "1994",
        "genre": "Britpop",
        "imgURL": "https://i.imgur.com/5Jzk1Lz.png",
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
        "imgURL": "https://i.imgur.com/v7npMwu.png",
        "album": "The Stereo Love Show",
        "songLength": "4:12",
        "songLink": "p-Z3YrHJ1sU",
        "userClicks": 0,
        "globalListens": 0,
        "reviews": []
      },
      {
        "title": "Wish You Were Here",
        "artist": "Incubus",
        "releaseYear": "2001",
        "genre": "Hard Rock",
        "imgURL": "https://i.imgur.com/4V4ZqGi.png",
        "album": "Morning View",
        "songLength": "3:34",
        "songLink": "mZnUYsqw8BA",
        "userClicks": 0,
        "globalListens": 0,
        "reviews": []
      },
      {
        "title": "Self Esteem",
        "artist": "The Offspring",
        "releaseYear": "1994",
        "genre": "Punk Rock",
        "imgURL": "https://i.imgur.com/unHrca1.png",
        "album": "Smash",
        "songLength": "4:20",
        "songLink": "eeWjzBHUdsI",
        "userClicks": 0,
        "globalListens": 0,
        "reviews": []
      },
      {
        "title": "Supersonic",
        "artist": "Oasis",
        "releaseYear": "1994",
        "genre": "Britpop",
        "imgURL": "https://i.imgur.com/GYf2hLI.png",
        "album": "Definitely Maybe",
        "songLength": "4:40",
        "songLink": "BJKpUH2kJQg",
        "userClicks": 0,
        "globalListens": 0,
        "reviews": []
      },
      {
        "title": "Hate It or Love It",
        "artist": "The Game feat. 50 Cent",
        "releaseYear": "2004",
        "genre": "Hip-hop",
        "imgURL": "https://i.imgur.com/45B00g0.png",
        "album": "The Documentary",
        "songLength": "3:26",
        "songLink": "B_1moEBS4TE",
        "userClicks": 0,
        "globalListens": 0,
        "reviews": []
      },
      {
        "title": "Loser",
        "artist": "Beck",
        "releaseYear": "1992",
        "genre": "Alternative Rock",
        "imgURL": "https://i.imgur.com/AFSRR94.png",
        "album": "Mellow Gold",
        "songLength": "3:53",
        "songLink": "YgSPaXgAdzE",
        "userClicks": 0,
        "globalListens": 0,
        "reviews": []
      },
      {
        "title": "Knockin' on Heaven's Door",
        "artist": "Guns N' Roses",
        "releaseYear": "1992",
        "genre": "Hard Rock",
        "imgURL": "https://i.imgur.com/dJ86UEP.png",
        "album": "Use Your Illusion II",
        "songLength": "5:36",
        "songLink": "f8OHybVhQwc",
        "userClicks": 0,
        "globalListens": 0,
        "reviews": []
      },
      {
        "title": "Get Lucky",
        "artist": "Daft Punk feat Pharrell Williams",
        "releaseYear": "2013",
        "genre": "Disco, Funk",
        "imgURL": "https://i.imgur.com/KhRlWw5.png",
        "album": "Random Access Memories",
        "songLength": "4:08",
        "songLink": "5NV6Rdv1a3I",
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