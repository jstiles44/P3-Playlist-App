const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Song = new Schema(
  {
    title: { type: String, required: true },
    artist: { type: String, required: true },
    releaseYear: { type: String, required: true },
    genre: { type: String, required: true },
    albumCover: { type: String, required: true },
    album: {type: String, required: true},
    songLength: { type: String, required: true },
    songLink: { type: String, required: true },
    userClicks: {type: Number, required: false}
    // userIds: [{ type: Schema.Types.ObjectId, ref: 'users' }]
    // rating: {rating: Number, userId: String}
    // ratings: [{ rating: Number, songId: { type: Schema.Types.ObjectId, ref: 'songs' } }] (will be added post mvp)
  },
  { timestamps: true }
);

module.exports = mongoose.model('songs', Song)