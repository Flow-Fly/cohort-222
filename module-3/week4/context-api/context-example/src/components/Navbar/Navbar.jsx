import React, { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import { NavLink } from "react-router-dom"

const Navbar = () => {
	const { themeColor, setThemeColor } = useContext(ThemeContext)
	const switchTheme = () =>
		setThemeColor(themeColor === "dark" ? "light" : "dark")

	console.log(themeColor)
	return (
		<nav className={"Navbar " + themeColor}>
			<h1>Context lesson</h1>
			<NavLink to="/">Profile</NavLink>
			<NavLink to="/articles">Articles</NavLink>
			<button onClick={switchTheme}>
				{" "}
				{themeColor === "dark" ? "🌞 Light" : "🌜️ Dark"} mode{" "}
			</button>
		</nav>
	)
}

export default Navbar
