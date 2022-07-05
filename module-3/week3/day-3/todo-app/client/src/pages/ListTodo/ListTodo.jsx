import React, { useEffect } from "react"
import axios from "axios"
const API_URL = process.env.REACT_APP_BACKEND_URL

const ListTodo = () => {
	const getAllTodos = async () => {
		const response = await axios.get(`${API_URL}/todos`)
		console.log(response)
	}
	useEffect(() => {
		getAllTodos()
	}, [])

	return <div>ListTodo</div>
}

export default ListTodo
