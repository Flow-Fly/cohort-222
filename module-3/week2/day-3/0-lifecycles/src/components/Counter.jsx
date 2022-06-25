import React, { useState, useEffect } from "react"

const Counter = () => {
	const [count, setCount] = useState(0)
	// const [name, setName] = useState("")
	const [intervalState, setIntervalState] = useState(null)

	useEffect(() => {
		console.log("Component is mounted !!")
		const intervalId = setInterval(() => {
			setCount((prevCount) => prevCount + 1)
			console.count("interval update")
		}, 1000)
		setIntervalState(intervalId)
	}, [])

	useEffect(() => {
		// console.log("Count has been modified to ", count)
	}, [count])

	useEffect(() => {
		return () => {
			console.log("Component is going to unmount 👀")
			console.log(intervalState)
			clearInterval(intervalState)
		}
	}, [intervalState])

	return (
		<>
			<button onClick={() => setCount(count - 1)}>-</button>
			<h2>{count}</h2>
			<button onClick={() => setCount(count + 1)}>+</button>
		</>
	)
}

export default Counter
