import "./App.css"
import Counter from "./components/Counter"
import { useState } from "react"

function App() {
	const [showCounter, setShowCounter] = useState(false)
	return (
		<div className="App">
			<button onClick={() => setShowCounter(!showCounter)}>
				{showCounter ? "Hide " : "Show "}counter
			</button>
			<div>{showCounter && <Counter />}</div>
		</div>
	)
}

export default App
