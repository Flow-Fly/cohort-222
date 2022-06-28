import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProfilePage({ loggedInUser }) {

  if(!loggedInUser){
    return <Navigate to="/" />
  }
  return (
    <div>
      <h1>Profile</h1>
      <p>Welcome {loggedInUser?.username}</p>
    </div>
  )
}
