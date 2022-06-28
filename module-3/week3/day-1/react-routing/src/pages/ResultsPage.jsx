import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function ResultsPage() {
  const [ searchParams, setSearchParams ] = useSearchParams();

  const place = searchParams.get("place");
  const destType = searchParams.get("destType")
  return (
    <div>
      <h1>Results page</h1>
      <p>Place: {place}</p>
      <p>Dest type: {destType}</p>
    </div>
  )
}
