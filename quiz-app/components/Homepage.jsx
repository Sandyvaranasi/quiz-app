import React from 'react'
import { Link } from 'react-router-dom'

export default function Homepage() {
  return (
    <>
    <Link to={'/quiz'}>
    <button>Start Quiz</button>
    </Link>
    </>
  )
}
