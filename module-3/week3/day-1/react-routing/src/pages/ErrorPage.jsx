import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div>
      <h1>404 NOT FOUND</h1>
      <Link to="/">Go back</Link>
    </div>
  )
}
