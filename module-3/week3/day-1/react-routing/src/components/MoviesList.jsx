import React, { useState } from 'react'
import moviesData from '../data'
import MovieItem from './MovieItem';

export default function MoviesList() {
  const [movies, setMovies] = useState(moviesData);

  const handleDelete = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
  }

  const handleClean = () => {
    // movies = []; - Change the value directly 🛑
    setMovies([]); // Use the set function to change the value ✅
  }


  // Bonus
  // const handleSort = (property) => {...} 

  const handleSortByYear = () => {
    const moviesCopy = [...movies]; // Mandatory to create a copy of the array because sort modifies the array
    setMovies(moviesCopy.sort((movie1, movie2) => movie1.year - movie2.year));
  }

  const handleSortById = () => {
    const moviesCopy = [...movies];
    setMovies(moviesCopy.sort((movie1, movie2) => movie1.id - movie2.id))
  }

  const handleSortByRuntime = () => {
    const moviesCopy = [...movies];
    setMovies(moviesCopy.sort((movie1, movie2) => movie1.runtime - movie2.runtime))
  }

  const handleAdd = () => {
    const newMovie = { 
      id: movies.length + 1, 
      hasOscars: false, 
      title: "Inception", 
      year: "2010", 
      runtime: "148", 
      genres: ["Science Fiction"], 
      director: "Christopher Nolan", 
      actors: "Leonardo DiCaprio, Ken Watanab, Joseph Gordon-Levit, Marion Cotillar, Elliot, Tom Hard, Cillian Murph, Tom Berenge, Michael Caine", 
      plot: "Cobb and Arthur are 'extractors'; they perform corporate espionage using experimental dream-sharing technology to infiltrate their targets..", 
      posterUrl: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg?20170322172828" 
    }
    const moviesCopy = [...movies];
    moviesCopy.push(newMovie);
    
    setMovies(moviesCopy);
  }

  const displayMovies = () => {
    return (
      movies.map((movie) => {
        return (
          <MovieItem
            key={movie.id}
            {...movie}
            handleDelete={handleDelete}
          />
        )
      })
    )
  }
  return (
    <div>
      <h1>Movies list App</h1>
      <div className='action-buttons'>
        <button onClick={() => handleSortByYear()}>Sort by year</button>
        <button onClick={() => handleSortById()}>Sort by Id</button>
        <button onClick={() => handleSortByRuntime()}>Sort by Runtime</button>
        <button onClick={() => handleAdd()}>Add movie</button>
      </div>
      <div className='movies-list'>
        {
          displayMovies()
        }
      </div>
    </div>
  );
}
