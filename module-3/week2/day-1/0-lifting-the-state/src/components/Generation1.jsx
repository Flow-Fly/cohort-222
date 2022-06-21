import React from "react"
import Generation2 from "./Generation2"
const Generation1 = ({ setCount }) => {
	return (
		<div>
			<Generation2 setCount={setCount} />
		</div>
	)
}

export default Generation1
