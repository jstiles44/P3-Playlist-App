# P3-Playlist-App

# Overview
The SongsYoü app allows users to search a given song bank and add songs to their personal playlists. Songs will be clickable and and details will render on page load (title, artist, etc.). A YouTube player will show on the details page. On the User's playlist page, an autoplay feature will show where the user can listen to their playlist. The Home page will show most popular and top rated songs that are determined by tracking user clicks and ratings. 

![Landing-Page](https://i.imgur.com/Yos4geP.png)


# Schema
```
const Song = new Schema(
  {
    title: { type: String, required: true },
    artist: { type: String, required: true },
    releaseYear: { type: String, required: true },
    genre: { type: String, required: true },
    imgURL: { type: String, required: true },
    album: {type: String, required: true},
    songLength: { type: String, required: true },
    songLink: { type: String, required: true },
    userClicks: { type: Number, required: true },
    globalListens: {type: Number, required: true},
    reviews: [{
      rating: { type: Number, required: true },
    }]
  },
  {
    timestamps: true,
    toJSON: { virtuals: true}}
);

```
```
const User = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password_digest: { type: String, required: true },
    playlist: []
  },
  { timestamps: true }
);

```
  
# Whimsical Diagram
![Component Hierarchy](https://i.imgur.com/8QnGobN.png)



