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
        "imgURL": "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
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
        "imgURL": "https://images.unsplash.com/photo-1576594496020-534bf2437b21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
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
          "imgURL": "https://i.ibb.co/XkKm1pM/assorted-color-paint-brush-stroke-1672850.jpg",
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
        "imgURL": "https://images.unsplash.com/photo-1580380853934-834251ec0e95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
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
        "imgURL": "https://images.unsplash.com/photo-1531826338556-162edb086560?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
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
        "imgURL": "https://i.ibb.co/bJrPBSQ/steve-johnson-n-WYz-Sj-Ac0e-E-unsplash-Cropped.jpg",
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
        "imgURL": "https://i.ibb.co/QnZWFXJ/blue-green-and-brown-abstract-painting-3582425.jpg",
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
        "imgURL": "https://images.unsplash.com/photo-1577915509669-e8daeb28b498?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
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
        "imgURL": "https://images.unsplash.com/photo-1575986711002-b1e7452c8b17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
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
        "imgURL": "https://i.ibb.co/jJntzzb/painting-wallpaper-1070527.jpg",
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
        "imgURL": "https://i.ibb.co/qy7f9cb/orange-and-multicolored-abstract-painting-2784948.jpg",
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
        "imgURL": "https://i.ibb.co/kh7C2M5/steve-johnson-RLy-Ez-Lmh-R98-unsplash-1-Cropped.jpg",
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
        "imgURL": "https://i.ibb.co/NtkxmdN/blue-white-red-and-yellow-abstract-painting-1143758.jpg",
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
        "imgURL": "https://i.ibb.co/zF1Y6LV/abstract-painting-1293125.jpg",
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
        "imgURL": "https://i.ibb.co/TwkVCj5/steve-johnson-Ann-Q-TOu-Bxc-unsplash-Cropped.jpg",
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
        "imgURL": "https://i.ibb.co/FWRsGJy/photo-of-abstract-painting-1451567.jpg",
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
        "imgURL": "https://i.ibb.co/tbDwCmL/red-yellow-and-blue-abstract-painting-1286632.jpg",
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
        "imgURL": "https://i.ibb.co/kmV31B1/yellow-and-red-abstract-painting-1789968.jpg",
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
        "imgURL": "https://i.ibb.co/bvJpK6d/photo-of-abstract-painting-on-canvas-1812960.jpg",
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
        "imgURL": "https://i.ibb.co/jf7fJkj/multicolored-abstract-painting-1570779.jpg",
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
        "imgURL": "https://i.ibb.co/30GbHgf/blue-orange-and-white-abstract-painting-1183992.jpg",
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
        "imgURL": "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
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
        "imgURL": "https://images.unsplash.com/photo-1576594496020-534bf2437b21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
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