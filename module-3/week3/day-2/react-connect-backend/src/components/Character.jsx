import { Link } from "react-router-dom";

export default function Character({ name, weapon, occupation, id, hideLink, handleDelete }) {
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Weapon: {weapon}</p>
      <p>Occupation: {occupation}</p>
      {hideLink ? <Link to="/">Go back</Link> : <Link  to={`/${id}`}>See details</Link>}
      {handleDelete && <button onClick={() => handleDelete(id)}>Remove</button>}
    </div>
  )
}
