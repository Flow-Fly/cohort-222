const router = require('express').Router();
const Pokemon = require('../models/Pokemon.model');

// C(R)UD -> Retrieve all the information
router.get("/", async (req, res) => {
	try {
		const pokemons = await Pokemon.find();
		res.render('pokemons/pokemons-list', { pokemons });
	} catch (error) {
		console.error(error);
	}
})

// (C)RUD -> Create a document in the database
router.get('/create', (req, res) => {
	res.render('pokemons/pokemons-create');
})

router.post('/create', async (req, res) => {
	// { name: "", image: "", weight: "", height: ""};
	try {
		const { name, image, weight, height } = req.body;
		await Pokemon.create({
			name,
			image,
			weight,
			height
		})
		res.redirect("/pokemons");
	} catch (error) {
		console.error(error);
	}

})

// C(R)UD -> Retrieve one document by id
router.get('/:id', async (req, res) => {
	// const id = req.params.id;
	// const secondparameter = req.params.secondparameter;
	// const { id, secondparameter } = req.params;
	try {
		const { id } = req.params;
		const pokemon = await Pokemon.findById(id);

		// { pokemon: { name: "", weight: "", height: ""}}
		// res.render('pokemons/pokemons-detail', { pokemon });

		// { name: "", weight: "", height: ""}
		res.render('pokemons/pokemons-detail', pokemon);
	} catch (error) {
		console.error(error);
	}
})

module.exports = router;