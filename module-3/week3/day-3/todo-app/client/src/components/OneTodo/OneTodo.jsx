import React from "react"
import { Link } from "react-router-dom"

const OneTodo = ({ priority, name, id }) => {
	return (
		<div
			className="OneTodo"
			style={{
				border: `2px solid ${priority ? "red" : "black"}`,
			}}>
			<h3>
				{/* <Link to={`${id}`}>{name}</Link> */}
				<Link to={`/todo/${id}`}>{name}</Link>
			</h3>
		</div>
	)
}

export default OneTodo
