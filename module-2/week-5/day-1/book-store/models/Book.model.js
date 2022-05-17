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
  }
});

const Book = model('Book', bookSchema);

module.exports = Book;