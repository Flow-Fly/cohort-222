import { createContext, useState } from "react"

const ThemeContext = createContext()

const ThemeContextWrapper = ({ children }) => {
	const [themeColor, setThemeColor] = useState("dark")
	// console.log("We are in the context !")
	console.log(children)
	return (
		<ThemeContext.Provider value={{ themeColor, setThemeColor }}>
			{children}
		</ThemeContext.Provider>
	)
}

export { ThemeContext, ThemeContextWrapper }
