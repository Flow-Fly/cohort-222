const router = require("express").Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const isAuthenticated = require("../middlewares/isAuthenticated")
// const { Mongoose } = require("mongoose")
const User = require("../models/User.model")

/**
 * ! All routes are prefixed with /auth
 */

router.post("/signup", async (req, res, next) => {
	const { username, password } = req.body
	if (!username || !password) {
		return res
			.status(400)
			.json({ message: "We need some informations to work with here!" })
	}

	// ! To use only if you want to enforce strong password (not during dev-time)

	// const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

	// if (!regex.test(password)) {
	// 	return res
	// 		.status(400)
	// 		.json({
	// 			message:
	// 				"Password needs to have at least 8 chars and must contain at least one number, one lowercase and one uppercase letter.",
	// 		});
	// }

	try {
		const foundUser = await User.findOne({ username })
		if (foundUser) {
			return res.status(409).json({ message: "There's another one of you!" })
		}
		const salt = bcrypt.genSaltSync(10)
		const hashedPass = bcrypt.hashSync(password, salt)

		await User.create({
			username,
			password: hashedPass,
		})
		return res.status(201).json({ message: "All good" })
	} catch (error) {
		next(error)
	}
})

router.post("/signin", async (req, res, next) => {
	const { username, password } = req.body
	if (!username || !password) {
		return res
			.status(400)
			.json({ message: "We need some informations to work with here!" })
	}

	try {
		const foundUser = await User.findOne({ username })
		if (!foundUser) {
			return res.status(400).json({ message: "You're not youself." })
		}
		const goodPass = bcrypt.compareSync(password, foundUser.password)

		if (goodPass) {
			const user = foundUser.toObject()
			delete user.password
			/**
			 * We are going to use `jwt`
			 * It has a mnethod called `sign` which allow us to create a Token
			 *
			 * It taked 3 arguments:
			 * - first one is the user information, we refer to it as the `payload`
			 * - Second one: It's a secret String
			 * - Third one is the options: algorithms, expiration time
			 */

			const authToken = jwt.sign(user, process.env.TOKEN_SECRET, {
				algorithm: "HS256",
				expiresIn: "1d",
			})

			// Send the token to the client

			res.status(200).json(authToken)
		} else {
			res.status(400).json({ message: "Did you do some typos ?" })
		}
	} catch (error) {
		next(error)
	}
})

router.get("/me", isAuthenticated, (req, res) => {
	res.status(200).json(req.payload)
})

module.exports = router
