import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav>
      {/* <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link> */}
      <NavLink to="/" className={({ isActive }) => isActive ? 'selected' : ''}>Home</NavLink>
      <NavLink to="/movies" className={({ isActive }) => isActive ? 'selected' : ''}>Movies</NavLink>
      <NavLink to="/profile" className={({ isActive }) => isActive ? 'selected' : ''}>Profile</NavLink>
      <NavLink to="/search?place=Madrid&destType=hotel" className={({ isActive }) => isActive ? 'selected' : ''}>Search</NavLink>
    </nav>
  )
}
