import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}>Home</NavLink>
      <NavLink to="/create" className={({ isActive }) => isActive ? "selected" : ""}>Create character</NavLink>
    </nav>
  )
}
