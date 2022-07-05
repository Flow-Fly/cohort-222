import React, { useEffect, useState } from "react"
import axios from "axios"
import "./ListTodo.css"
import OneTodo from "../../components/OneTodo/OneTodo"
const API_URL = process.env.REACT_APP_BACKEND_URL

const ListTodo = () => {
	const [todos, setTodos] = useState([])
	const getAllTodos = async () => {
		const response = await axios.get(`${API_URL}/todos`)
		// console.log(response)
		setTodos(response.data)
	}
	useEffect(() => {
		getAllTodos()
	}, [])

	return (
		<div className="ListTodo">
			<h2>Here are my todos !</h2>
			<div className="container">
				{todos.map((todo) => {
					console.log(todo)
					return (
						<OneTodo
							key={todo.id}
							id={todo.id}
							name={todo.name}
							priority={todo.priority}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default ListTodo
