const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.use('/books', require('./book.routes'));

module.exports = router;
