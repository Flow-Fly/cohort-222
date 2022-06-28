import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import moviesData from '../data'

export default function MovieDetailsPage() {
  const { id } = useParams();
  const [ movie, setMovie ] = useState(null);

  // Filter - Returns an array 
  // const foundedMovies = moviesData.filter(movie => movie.id == id);
  // const foundedMovie = foundedMovies[0];

  // Find  - Returns null or the object that match the condition
  // const foundedMovie = moviesData.find(movie => movie.id == id);

  // useEffect(() => {
  //   console.log('When mounted');
  //   // window
  //   // API Call to get the movie info
  //   const foundedMovie = moviesData.find(movie => movie.id == id);
  //   setMovie(foundedMovie);
  // }, [])

  useEffect(() => {
    console.log('When mounted');
    // Access window
    // API Call to get the movie info
    const foundedMovie = moviesData.find(movie => movie.id == id);
    setMovie(foundedMovie);
    const handleScroll = () => console.log('Scroll')
    window.addEventListener('scroll', handleScroll);

    // Unmount phase
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [id])

  if(!movie) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1>Movie details {id}</h1>
      <h2>Title: {movie.title}</h2>
      <p>Plot: {movie.plot}</p>
      <h1>Movie details {id}</h1>
      <h2>Title: {movie.title}</h2>
      <p>Plot: {movie.plot}</p>
      <h1>Movie details {id}</h1>
      <h2>Title: {movie.title}</h2>
      <p>Plot: {movie.plot}</p>
      <h1>Movie details {id}</h1>
      <h2>Title: {movie.title}</h2>
      <p>Plot: {movie.plot}</p>
      <h1>Movie details {id}</h1>
      <h2>Title: {movie.title}</h2>
      <p>Plot: {movie.plot}</p>
      <h1>Movie details {id}</h1>
      <h2>Title: {movie.title}</h2>
      <p>Plot: {movie.plot}</p>
      <h1>Movie details {id}</h1>
      <h2>Title: {movie.title}</h2>
      <p>Plot: {movie.plot}</p>
      <h1>Movie details {id}</h1>
      <h2>Title: {movie.title}</h2>
      <p>Plot: {movie.plot}</p>
      <h1>Movie details {id}</h1>
      <h2>Title: {movie.title}</h2>
      <p>Plot: {movie.plot}</p>
      <h1>Movie details {id}</h1>
      <h2>Title: {movie.title}</h2>
      <p>Plot: {movie.plot}</p>
      <h1>Movie details {id}</h1>
      <h2>Title: {movie.title}</h2>
      <p>Plot: {movie.plot}</p>
      <h1>Movie details {id}</h1>
      <h2>Title: {movie.title}</h2>
      <p>Plot: {movie.plot}</p>
      <h1>Movie details {id}</h1>
      <h2>Title: {movie.title}</h2>
      <p>Plot: {movie.plot}</p>
    </div>
  )
}
