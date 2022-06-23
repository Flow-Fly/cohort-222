import React, { useState } from "react"
import useForm from "../hooks/useForm"

// const cat = {
// 	name: "Zouzou",
// }

// const myValues = {
// 	something: {
// 		anOtherProperty: "name",
// 	},
// }

// console.log(cat[myValues.something.anOtherProperty])

const Form = ({ handleAddContact }) => {
	// const [name, setName] = useState("")
	// const [email, setEmail] = useState("")
	// const [phone, setPhone] = useState("")
	// const [values, setValues] = useState({ name: "", phone: "", email: "" })
	const [values, setValues, resetFields] = useForm({
		name: "",
		phone: "",
		email: "",
	})

	// const resetFields = () => {
	// 	// setName("")
	// 	// setEmail("")
	// 	// setPhone("")
	// }

	const handleSubmit = (event) => {
		event.preventDefault()
		if (values.name === "" || values.email === "" || values.phone === "") {
			console.log("You should add some infos!")
			return
		}
		console.log(values)
		// const contact = { values.name, values.email, values.phone }
		handleAddContact(values)
		resetFields()
	}
	// console.log(values)
	return (
		<form action="" onSubmit={handleSubmit}>
			<div>
				<label htmlFor="name">name:</label>
				<input
					type="text"
					id="name"
					name="name"
					value={values.name}
					onChange={setValues}
				/>
			</div>
			<div>
				<label htmlFor="email">email</label>
				<input
					type="text"
					id="email"
					name="email"
					value={values.email}
					onChange={setValues}
				/>
			</div>
			<div>
				<label htmlFor="phone">phone:</label>
				<input
					type="text"
					id="phone"
					name="phone"
					value={values.phone}
					onChange={setValues}
				/>
			</div>

			{/* On a select, the onChange event goes on the select */}
			<select name="color" id="" onChange={setValues}>
				<option value="arancia">Arancia</option>
				<option value="blue">Blue</option>
				<option value="creme">Creme</option>
				<option value="dark-green">Dark Green</option>
			</select>
			<button>Add Contact</button>
		</form>
	)
}

export default Form
