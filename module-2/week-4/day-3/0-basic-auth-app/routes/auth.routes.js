const router = require("express").Router()
const User = require("../models/User.model")
const bcrypt = require("bcryptjs")
const isLoggedOut = require("../middlewares/isLoggedOut")
const displaySignup = (req, res) => res.render("auth/signup")

// router.get("/signup", (req, res) => {
// 	res.render("auth/signup")
// })

router.get("/logout", (req, res) => {
	req.session.destroy((err) => {
		if (err) {
			return res.render("auth/logout", {
				errorMessage: err.message,
			})
		}
		res.redirect("/")
	})
})

router.use(isLoggedOut)

router.get("/signup", displaySignup)

router.post("/signup", async (req, res) => {
	const { email, password } = req.body

	if (!password || !email) {
		const errorMessage = `Your password or email are not valid`
		res.render("auth/signup", { errorMessage })
		return
	}
	const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/

	if (!regex.test(password)) {
		return res.render("auth/signup", {
			errorMessage:
				"Password needs to be 8 char long, including lower/upper case and a digit",
		})
	}

	try {
		const foundUser = await User.findOne({ email })

		if (foundUser) {
			const errorMessage = `You are already registered !`
			res.render("auth/signup", { errorMessage })
			return
		}

		const hashedPassword = bcrypt.hashSync(password, 12)
		const createdUser = await User.create({
			email,
			password: hashedPassword,
		})

		// const objectUser = createdUser.toObject()

		// delete objectUser.password
		// req.session.currentUser = objectUser
		// console.log("req.session.currentUser", req.session.currentUser)
		// res.redirect("/profile")

		res.redirect("/auth/signin")
	} catch (e) {
		console.log(e)
	}
})

router.get("/signin", isLoggedOut, (req, res) => {
	res.render("auth/signin")
})

router.post("/signin", isLoggedOut, async (req, res, next) => {
	const { email, password } = req.body

	if (!email || !password) {
		return res.render("auth/signin", {
			errorMessage: "Please provide an email and a a password",
		})
	}

	try {
		const foundUser = await User.findOne({ email })

		if (!foundUser) {
			return res.render("auth/signin", {
				errorMessage: "Wrong credentials",
			})
		}

		const checkPassword = bcrypt.compareSync(password, foundUser.password)
		if (!checkPassword) {
			res.render("auth/signin", {
				errorMessage: "Wrong credentials",
			})
		}
		const objectUser = foundUser.toObject()
		delete objectUser.password
		req.session.currentUser = objectUser

		return res.redirect("/")
	} catch (e) {
		next(e)
	}
})

module.exports = router
