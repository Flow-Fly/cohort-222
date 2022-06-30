import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Character from '../components/Character';

export default function CharacterPage() {
  const { id } = useParams();
  const [ character, setCharacter ] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(`https://ih-crud-api.herokuapp.com/characters/${id}`);
        setCharacter(response.data)
      } catch (error) {
        console.error(error);
      }
    }

    fetchCharacter();
  }, [id])

  return (
    <div>
      <h1>Character {id} page</h1>
      {character ? <Character hideLink {...character} /> : <p>Loading..</p> }
     
    </div>
  )
}
