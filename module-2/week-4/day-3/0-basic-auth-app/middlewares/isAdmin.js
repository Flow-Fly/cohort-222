const isAdmin = (req, res, next) => {
	// if (req.session.currentUser) {
	// 	if (req.session.currentUser.isAdmin) {
	// 		next()
	// 	}
	// }
	// res.redirect("/")

	if (req.session.currentUser?.isAdmin) {
		return next()
	}
	res.redirect("/")
}

module.exports = isAdmin
