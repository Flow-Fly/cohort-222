import axios from "axios";
import { useEffect, useState } from "react"
import Character from "../components/Character";

export default function CharactersPage() {
  const [ characters, setCharacters ] = useState(null);
  useEffect(() => {
    // API CALL
    const fetchCaracters = async () => {
      try {
        const response = await axios.get("https://ih-crud-api.herokuapp.com/characters");
        setCharacters(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchCaracters();
  }, [])

  const displayCharacters = () => {
    return characters.map((character) => (
      <Character {...character} key={character.id} handleDelete={handleDelete} />
    ))
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://ih-crud-api.herokuapp.com/characters/${id}`);
      const response = await axios.get("https://ih-crud-api.herokuapp.com/characters");
      setCharacters(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>Characters Page</h1>
      {
        characters ? displayCharacters() : <p>Loading...</p>
      }
    </div>
  )
}
