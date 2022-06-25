import "./App.css"
import { useState, useEffect } from "react"
import axios from "axios"

const apiUrl = "https://rickandmortyapi.com/api/character/?page="

function App() {
	const [allCharacters, setAllCharacters] = useState(null)
	const [pageCount, setPageCount] = useState(1)

	async function fetchRickAndMorty() {
		const response = await axios.get(`${apiUrl}${pageCount}`)
		// console.log(response.data.results)
		setAllCharacters(response.data.results)
	}
	useEffect(() => {
		fetchRickAndMorty()
	}, [pageCount])

	// useEffect(() => {
	// 	fetchRickAndMorty()
	// }, [pageCount])

	// console.log(allCharacters)

	if (!allCharacters) {
		return <div className="loading">...Loading</div>
	}
	return (
		<div className="App">
			<h1>Fetching some informations online !</h1>
			{allCharacters.map((character) => {
				return (
					<div key={character.id} className="character">
						<picture>
							<img src={character.image} alt={character.name} />
						</picture>
						<h2>
							{character.name}{" "}
							<span>{character.status === "Alive" ? "😎" : "🪦"}</span>
						</h2>
					</div>
				)
			})}

			{pageCount > 1 && (
				<button onClick={() => setPageCount((prev) => prev - 1)}>
					{" "}
					Previous page
				</button>
			)}
			{pageCount < 42 && (
				<button onClick={() => setPageCount((prev) => prev + 1)}>
					Next Page
				</button>
			)}
		</div>
	)
}

export default App
