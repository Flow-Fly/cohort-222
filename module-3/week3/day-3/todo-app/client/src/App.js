import "./App.css"
import { Routes, Route } from "react-router-dom"
// import axios from "axios"
// import { useEffect } from "react"
import HomePage from "./pages/HomePage"
import Header from "./components/Header/Header"
import ListTodo from "./pages/ListTodo/ListTodo"
import FormTodo from "./pages/FormTodo/FormTodo"
import DetailsTodo from "./pages/DetailsTodo/DetailsTodo"
import Signup from "./pages/Signup/Signup"
import Signin from "./pages/Signin/Signin"
// const API_URL = process.env.REACT_APP_BACKEND_URL

function App() {
	// const makeAnAxiosCall = async () => {
	// 	const response = await axios.get(API_URL)
	// 	console.log(response)
	// }
	// useEffect(() => {
	// 	makeAnAxiosCall()
	// }, [])
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/todo" element={<ListTodo />} />
				<Route path="/todo/:id" element={<DetailsTodo />} />
				{/* <Route path="/todo/edit/:id" element={<EditTodo />} /> */}
				<Route path="/todo/create" element={<FormTodo />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/signin" element={<Signin />} />
			</Routes>
		</div>
	)
}

export default App
