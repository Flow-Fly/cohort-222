const bcrypt = require("bcryptjs")

const plainPassword = "HelloWorld"

console.log("plainPassword", plainPassword)

const salt = bcrypt.genSaltSync(12)

const hashedPassword = bcrypt.hashSync(plainPassword, salt)

console.log("hashedPassword", hashedPassword)

const verifyPass = bcrypt.compareSync(plainPassword, hashedPassword)

console.log(
	`Is my plainPassword corresponding to the created Hash: ${verifyPass}`
)
const previousHash =
	"$2a$12$mlot6VDuUuRyo6aD5sfqE.fYCQqn7plXJHk/znE0uu2tszXdjQ02C"

const verifyPass2 = bcrypt.compareSync(plainPassword, previousHash)
console.log(
	`Is my plainPassword corresponding to the created Hash: ${verifyPass2}`
)

async function encrypt() {
	const plainPass = "12345"
	try {
		const hashedPass = await bcrypt.hash(plainPass, 12)
		const check = await bcrypt.compare(plainPass, hashedPass)
		console.log("Password matching ? ", check)
	} catch (e) {
		console.log(e)
	}
}

encrypt()
