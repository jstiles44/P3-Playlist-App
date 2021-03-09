# P3-Playlist-App

# Schema
```
const Song = new Schema(
  {
    title: { type: String, required: true },
    artist: { type: String, required: true },
    releaseYear: { type: String, required: true },
    genre: { type: String, required: true },
    albumCover: { type: String, required: true },
    album: {type: String, required: true},
    songLength: { type: String, required: true },
    // rating: {rating: Number, userId: String}
    // ratings: [{ rating: Number, songId: { type: Schema.Types.ObjectId, ref: 'songs' } }] (will be added post mvp)
  },
  { timestamps: true }
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
[https://whimsical.com/project-3-5e6r5Nf6QWV2LeXVVAUkNj]

# Team Expectations
 [https://docs.google.com/document/d/1GhN5HvUg7l0-fWrjQbNgSDVdDREZRsePsqIo5hYoHM0/edit?usp=sharing]

# Overview
This app allows users to search a given song bank and add songs to their personal playlists.  Songs will be clickable and details will render upon click, such as title, artist, etc. Personal playlist analytics will render on the user home page.  These will be related to the percentage of songs (by title or by artist) in the playlist.


# MVP
- Full Crud front end and back end
- Render user playlist with full crud
- Style with css grid/flexbox
# Post-MVP
- Install rating system aggregrate
- Install rating system per user
- Add admin role for adding songs to the site
- Color Shift (dark mode, light mode)
