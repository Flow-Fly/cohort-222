import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import { API_URL } from "../../constants"

const DetailsTodo = () => {
	const [detailTodo, setDetailTodo] = useState({})
	const [feedback, setFeedback] = useState("")
	const { id } = useParams()
	const navigate = useNavigate()
	// console.log(id)

	const handleDelete = async () => {
		const { data } = await axios.delete(`${API_URL}/todos/${id}`)
		setFeedback(data.message)
		setTimeout(() => navigate("/todo"), 1000)
	}

	const getOneTodo = async () => {
		const { data } = await axios.get(`${API_URL}/todos/${id}`)
		// console.log(data)
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
		<div className="DetailsTodo" style={style}>
			{feedback && <h2>{feedback}</h2>}
			<h4>{detailTodo.name}</h4>
			<p>{detailTodo.description}</p>
			<p>Due for: {new Date(detailTodo.dueDate).toLocaleDateString()}</p>
			<button onClick={handleDelete}>Delete me !</button>
		</div>
	)
}

export default DetailsTodo
