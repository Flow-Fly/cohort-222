import React from "react"

const Generation2 = (props) => {
	return (
		<button onClick={() => props.setCount((jaison) => jaison + 1)}>
			Increment by 1 !
		</button>
	)
}

export default Generation2

// function handleNameChange(name = "Lukas") {}

// handleNameChange()

// handleNameChange("Jaison")
