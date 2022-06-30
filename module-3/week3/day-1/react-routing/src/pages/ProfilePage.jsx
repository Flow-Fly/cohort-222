import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

export default function ProfilePage({ loggedInUser }) {

  if(!loggedInUser){
    return <Navigate to="/" />
  }

  useEffect(() => {

  }, [loggedInUser])
  return (
    <div>
      <h1>Profile</h1>
      <p>Welcome {loggedInUser?.username}</p>
    </div>
  )
}
