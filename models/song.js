const mongoose = require('mongoose')
const Schema = mongoose.Schema

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

Song.virtual('rating').get(function () {
  let totalRating = 0
  this.reviews.forEach(review => {
    totalRating = totalRating + review.rating
  })
  return totalRating / this.reviews.length
})

module.exports = mongoose.model('songs', Song)