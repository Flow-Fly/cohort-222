import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import { API_URL } from "../../constants"

const DetailsTodo = () => {
	const [detailTodo, setDetailTodo] = useState({})
	const [feedback, setFeedback] = useState("")
	const [editMode, setEditMode] = useState(false)
	const [editTodo, setEditTodo] = useState({})
	const { id } = useParams()
	const navigate = useNavigate()
	// console.log(id)

	const handleDelete = async () => {
		const { data } = await axios.delete(`${API_URL}/todos/${id}`)
		setFeedback(data.message)
		setTimeout(() => navigate("/todo"), 1000)
	}

	const handleEditTodo = async (e) => {
		e.preventDefault()
		console.log(editTodo)
		const { data } = await axios.put(`${API_URL}/todos/${id}`, editTodo)
		console.log(data)
		data.dueDate = data.dueDate.slice(0, 10)
		setDetailTodo(data)
		setEditMode(false)
	}

	const getOneTodo = async () => {
		const { data } = await axios.get(`${API_URL}/todos/${id}`)
		data.dueDate = data.dueDate.slice(0, 10)
		// console.log(data)
		setEditTodo(data)
		setDetailTodo(data)
	}
	useEffect(() => {
		getOneTodo()
	}, [])

	if (Object.keys(detailTodo).length === 0) return <div>Loading</div>
	const style = {
		backgroundColor: detailTodo.priority ? "red" : "yellow",
	}
	return (
		<>
			<div className="DetailsTodo" style={style}>
				{feedback && <h2>{feedback}</h2>}
				<h4>{detailTodo.name}</h4>
				<p>{detailTodo.description}</p>
				<p>Due for: {detailTodo.dueDate}</p>
				<button onClick={handleDelete}>Delete me !</button>
				<button onClick={() => setEditMode(!editMode)}>Edit the todo</button>
			</div>

			{/* This form is conditionally rendered */}
			{editMode && (
				<form onSubmit={handleEditTodo}>
					<div>
						<label htmlFor="name">Name: </label>
						<input
							type="text"
							id="name"
							name="name"
							value={editTodo.name}
							onChange={(e) =>
								setEditTodo({
									...editTodo,
									[e.target.name]: e.target.value,
								})
							}
						/>
					</div>
					<div>
						<label htmlFor="description">Description: </label>
						<textarea
							type="text"
							id="description"
							name="description"
							value={editTodo.description}
							rows={4}
							cols={25}
							onChange={(e) =>
								setEditTodo({
									...editTodo,
									[e.target.name]: e.target.value,
								})
							}></textarea>
					</div>

					<div>
						<label htmlFor="dueDate">Due date: </label>
						<input
							type="date"
							id="dueDate"
							name="dueDate"
							value={editTodo.dueDate}
							onChange={(e) =>
								setEditTodo({
									...editTodo,
									[e.target.name]: e.target.value,
								})
							}
						/>
					</div>

					<div>
						<label htmlFor="priority">Important ?</label>
						<input
							type="checkbox"
							name="priority"
							id="priority"
							checked={editTodo.priority}
							onChange={(e) =>
								setEditTodo({
									...editTodo,
									[e.target.name]: e.target.checked,
								})
							}
						/>
					</div>

					<button>Edit the Todo</button>
				</form>
			)}
		</>
	)
}

export default DetailsTodo
