import { useState } from 'react';
import './App.css';
import MovieItem from './components/MovieItem';
import moviesData from './data'

function App() {
  const [ movies, setMovies ] = useState(moviesData);
  
  const handleDelete = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
  }

  const handleSortByYear = () => {
    const moviesCopy = [...movies]; // Mandatory to create a copy of the array because sort modifies the array
    setMovies(moviesCopy.sort((movie1, movie2) => movie1.year - movie2.year));
  }

  const handleClean = () => {
    // movies = [];
    setMovies([]);
  }

  const displayMovies = () => {
    // forEach - Iterate over the array but return undefined
    // map - Iterate over the array and return a new array
    return (
      movies.map((movie) => { 
        return (
          <MovieItem
            key={movie.id}
            // VERSION 1
            // movie={movie}

            // VERSION 2
            // title={movie.title}
            // director={movie.director}
            // plot={movie.plot}
            // genres={movie.genres}
            // actors={movie.actors}

            // PRO VERSION - Will pass one prop by each property of the movie object
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
      <button onClick={() => handleSortByYear()}>Sort by year</button>
      <div className='movies-list'>
        {
          displayMovies()
        }
      </div>
    </div>
  );
}

export default App;
