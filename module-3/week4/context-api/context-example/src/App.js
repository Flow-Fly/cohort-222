import "./App.css"
import { Routes, Route } from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "./context/ThemeContext"
import Navbar from "./components/Navbar/Navbar"
import Profile from "./components/Profile/Profile"
import Articles from "./components/Articles/Articles"
function App() {
	const { themeColor } = useContext(ThemeContext)
	// const [themeColor, setThemeColor] = useState("dark")
	return (
		<div className={`App ${themeColor}`}>
			<Navbar />

			{/* <Wrapper>
				<Profile />
			</Wrapper> */}
			<Routes>
				<Route path="/" element={<Profile />} />
				<Route path="/articles" element={<Articles />} />
			</Routes>
		</div>
	)
}

// function Wrapper(props) {
// 	return <div>{props.children}</div>
// }

export default App
