import React, { useState } from "react"

const Form = ({ handleAddContact }) => {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [phone, setPhone] = useState("")

	const resetFields = () => {
		setName("")
		setEmail("")
		setPhone("")
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		if (name === "" || email === "" || phone === "") {
			console.log("You should add some infos!")
			return
		}
		const contact = { name, email, phone }
		handleAddContact(contact)
		resetFields()
	}

	return (
		<form action="" onSubmit={handleSubmit}>
			<div>
				<label htmlFor="name">name:</label>
				<input
					type="text"
					id="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="email">email</label>
				<input
					type="text"
					id="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="phone">phone:</label>
				<input
					type="text"
					id="phone"
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
				/>
			</div>
			<button>Add Contact</button>
		</form>
	)
}

export default Form
