import React, { useState, useEffect } from "react"

const Counter = () => {
	const [count, setCount] = useState(0)
	// const [name, setName] = useState("")
	const [intervalState, setIntervalState] = useState(null)

	//! Executed when the component is mounted
	useEffect(() => {
		console.log("Component is mounted !!")
		const intervalId = setInterval(() => {
			setCount((prevCount) => prevCount + 1)
			console.count("interval update")
		}, 1000)
		setIntervalState(intervalId)
	}, [])

	//! Executed when `count` is modified
	useEffect(() => {
		// console.log("Count has been modified to ", count)
	}, [count])

	//! Executed when intervalState is modified and the cleanup function get triggered when the component is
	//! Unmounting
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
