const router = require('express').Router();
const { isLoggedIn } = require('../middlewares/auth.middlewares');
const Book = require('../models/Book.model');

router.get('/', async (req, res, next) => {
  try {
    const books = await Book.find();
    res.render('books/books-list', { books, isLoggedIn: req.session.currentUser });
  } catch (error) {
    next(error);
  }
})

router.get('/json-list', async (req, res, next) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    next(error);
  }
})


router.get('/create', (req, res, next) => {
  res.render('books/books-create');
})

router.post('/create', async (req, res, next) => {
  try {
    const { title, description, name, lastName, nationality, pictureUrl, rating } = req.body;
    await Book.create({
      title,
      description,
      author: {
        name,
        lastName,
        nationality,
        pictureUrl
      },
      rating
    });

    res.redirect('/books');
  } catch (error) {
    next(error);
  }
})

router.get('/:id/edit', isLoggedIn, async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    res.render('books/books-edit', book);
  } catch (error) {
    next(error);
  }
})

router.post('/:id/edit', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description, name, lastName, nationality, pictureUrl, rating } = req.body;
    await Book.findByIdAndUpdate(id,
      {
        title,
        description, 
        author:{
          name,
          lastName,
          nationality, 
          pictureUrl
        },
        rating
      },
      {
        new: true
      });
    
      res.redirect(`/books/${id}`);
  } catch (error) {
    next(error);
  }
})

router.post('/:id/delete', async (req, res, next) => {
  try {
    const { id } = req.params;
    await Book.findByIdAndDelete(id);

    res.redirect('/books');
  } catch (error) {
    next(error);
  }
})

router.get('/:id', isLoggedIn, async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    res.render('books/book-details', book);
  } catch (error) {
    next(error);
  }
})

module.exports = router;