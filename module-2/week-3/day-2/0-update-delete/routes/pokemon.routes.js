const router = require('express').Router();
const Pokemon = require('../models/Pokemon.model');
const Comment = require('../models/Comment.model');

// C(R)UD -> Retrieve all the information
router.get("/", async (req, res, next) => {
	try {
		const pokemons = await Pokemon.find().populate('comment comments');
		res.render('pokemons/pokemons-list', { pokemons });
	} catch (error) {
		next(error);
	}
})

// (C)RUD -> Create a document in the database
router.get('/create', (req, res, next) => {
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
		next(error);
	}

})

// CR(U)D -> Render edit form
router.get("/:id/edit", async (req, res, next) => {
	try {
		const { id } = req.params;
		const pokemon = await Pokemon.findById(id);
		res.render('pokemons/pokemons-edit', pokemon);
	} catch (error) {
		next(error);	
	}
})

// CR(U)D -> Edit pokemon route
router.post('/:id/edit', async (req, res, next) => {
	try {
		const { id } = req.params;
		const { name, image, weight, height } = req.body;
		await Pokemon.findByIdAndUpdate(id, { name, image, weight, height }, { new: true });

		res.redirect("/pokemons");
	} catch(error){
		console.log(error);
	}
})

// CRU(D) -> Delete document
router.post('/:id/delete', async (req, res, next) => {
	try {
		const { id } = req.params;
		await Pokemon.findByIdAndDelete(id);
		res.redirect('/pokemons');
	
	} catch (error) {
		next(error);
	}
})

// C(R)UD -> Retrieve one document by id
router.get('/:id', async (req, res, next) => {
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
		next(error);
	}
})

module.exports = router;