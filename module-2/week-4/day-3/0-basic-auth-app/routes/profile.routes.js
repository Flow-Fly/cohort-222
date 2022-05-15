const router = require("express").Router()
const isLoggedIn = require("../middlewares/isLoggedIn")
const isAdmin = require("../middlewares/isAdmin")
/**
 * This router is prefixed with /profile
 */
const decorateReq = (req, res, next) => {
	req.myFavouritePet = "cat"
	next()
}

router.use(decorateReq)

const dogRules = (req, res, next) => {
	console.log("req.myFavouritePet", req.myFavouritePet)
	req.myFavouritePet = "Dog"
	next()
}

router.get("/", isLoggedIn, dogRules, (req, res) => {
	console.log("req.myFavouritePet", req.myFavouritePet)

	res.render("profile", { pet: req.myFavouritePet })
})

router.get("/admin", isAdmin, (req, res, next) => {
	res.send("Super secret page")
})

module.exports = router
