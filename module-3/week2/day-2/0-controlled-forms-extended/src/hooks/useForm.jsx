import { useState } from "react"

const useForm = (initialValues) => {
	const [values, setValues] = useState(initialValues)

	const handleChange = (e) => {
		console.log("Name: ", e.target.name)
		console.log("Value: ", e.target.value)
		setValues({ ...values, [e.target.name]: e.target.value })
	}
	const reset = () => {
		const copy = { ...values }
		for (const key in copy) {
			// console.log(values[key])
			copy[key] = ""
		}
		setValues(copy)
	}
	return [values, handleChange, reset]
}

export default useForm
