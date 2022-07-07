import React, { useState } from "react"
import axios from "axios"
import "./FormTodo.css"
import { useNavigate } from "react-router-dom"

const API_URL = process.env.REACT_APP_BACKEND_URL

const FormTodo = () => {
	const [name, setName] = useState("")
	const [description, setDescription] = useState("")
	const [dueDate, setDueDate] = useState("")
	const [priority, setPriority] = useState(false)
	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault()
		const token = localStorage.getItem("authToken")
		const payload = { name, description, dueDate, priority }
		try {
			const response = await axios.post(`${API_URL}/todos`, payload, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			navigate("/todo")
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<form className="FormTodo" onSubmit={handleSubmit}>
			<div>
				<label htmlFor="name">Name: </label>
				<input
					type="text"
					id="name"
					name="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="description">Description: </label>
				<textarea
					type="text"
					id="description"
					name="description"
					value={description}
					rows={4}
					cols={25}
					onChange={(e) => setDescription(e.target.value)}></textarea>
			</div>

			<div>
				<label htmlFor="dueDate">Due date: </label>
				<input
					type="date"
					id="dueDate"
					name="dueDate"
					value={dueDate}
					onChange={(e) => setDueDate(e.target.value)}
				/>
			</div>

			<div>
				<label htmlFor="priority">Important ?</label>
				<input
					type="checkbox"
					name="priority"
					id="priority"
					checked={priority}
					onChange={() => setPriority(!priority)}
				/>
			</div>

			<button>Create a Todo</button>
		</form>
	)
}

export default FormTodo
