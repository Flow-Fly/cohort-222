import React from "react"
import { NavLink } from "react-router-dom"
import "./Header.css"

const Header = () => {
	return (
		<nav className="Header">
			<h1>Todo App</h1>
			<ul>
				<li>
					<NavLink to={"/"}>Home</NavLink>
				</li>
				<li>
					<NavLink to={"/todo"}>Todo list</NavLink>
				</li>
				<li>
					<NavLink to={"/todo/create"}>Add a todo</NavLink>
				</li>
				<li>
					<NavLink to={"/signup"}>Signup</NavLink>
				</li>
				<li>
					<NavLink to={"/signin"}>Signin</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Header
