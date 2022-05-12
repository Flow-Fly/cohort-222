require('../db');
const books = require('../data/books');
const Book = require('../models/Book.model');

const createBooks = async () => {
  try {
    await Book.create(books);
    console.log(`${books.length} books created`)
  } catch (error) {
    console.error(error);
  }
}

createBooks();