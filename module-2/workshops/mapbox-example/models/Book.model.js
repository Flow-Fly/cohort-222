const { Schema, model } = require('mongoose');

const bookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  author: {
    name: String,
    lastName: String,
    nationality: String,
    pictureUrl: String
  },
  rating: {
    type: Number,
    min: 0,
    max: 10
  },
  location: {
    type: {
      type: "String"
    },
    coordinates: [Number] // Lng - Lat
  }
});

const Book = model('Book', bookSchema);

module.exports = Book;