import "./App.css"
import { useState } from "react"
import Generation1 from "./components/Generation1"

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className="App">
			<p>count: {count}</p>
			<Generation1 setCount={setCount} />
		</div>
	)
}

export default App
