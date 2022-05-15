const router = require("express").Router()

/* GET home page */
router.get("/", (req, res, next) => {
	// console.log(req.session)
	res.render("index")
})
console.log("after Index")

router.use("/auth", require("./auth.routes"))
console.log("After Auth")

router.use("/profile", require("./profile.routes"))

module.exports = router
