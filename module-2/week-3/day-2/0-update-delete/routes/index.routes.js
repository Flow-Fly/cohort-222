const router = require('express').Router();


router.get("/", (req, res) => {
	res.render("index");
});


router.use("/pokemons", require('./pokemon.routes'));

module.exports = router;