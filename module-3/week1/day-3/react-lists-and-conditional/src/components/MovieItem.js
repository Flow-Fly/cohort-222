// VERSION 1
// export default function MovieItem(props) {
//   return (
//     <div className='movie' >
//       <h3>Title: {props.movie.title}</h3>
//       <p>Director: {props.movie.director}</p>
//       <p>Plot: {props.movie.plot}</p>
//       <ul>
//         {
//           props.movie.genres.map((genre, index) => {
//             return (
//               <li key={`genre-${index}`}>{genre}{index}</li>
//             )
//           })
//         }
//       </ul>
//     </div>
//   )
// }

// VERSION 1
// export default function MovieItem({ movie }) {
//   return (
//     <div className='movie' >
//       <h3>Title: {movie.title}</h3>
//       <p>Director: {movie.director}</p>
//       <p>Plot: {movie.plot}</p>
//       <ul>
//         {
//           movie.genres.map((genre, index) => {
//             return (
//               <li key={`genre-${index}`}>{genre}{index}</li>
//             )
//           })
//         }
//       </ul>
//     </div>
//   )
// }


// VERSION 2 - VERSION PRO
export default function MovieItem({ id, title, director, plot, genres, actors, handleDelete, year }) {
  return (
    <div className='movie' >
      <h3>Title: {title}</h3>
      <p>Director: {director}</p>
      <p>Plot: {plot}</p>
      <p>Actors: {actors}</p>
      <p>Year: {year}</p>
      <p>Genres:</p>
      <ul>
        {
          genres.map((genre, index) => {
            return (
              <li key={`genre-${index}`}>{index}-{genre}</li>
            )
          })
        }
      </ul>
      <button onClick={() => handleDelete(id)}>Delete movie 🗑</button>
    </div>
  )
}