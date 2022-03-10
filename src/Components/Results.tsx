import React from 'react'

const Results = () => {
    const result =localStorage.getItem('score') && localStorage.getItem('score')
    const userName =localStorage.getItem('name') && localStorage.getItem('name')
  return (
    <div data-testid="result-id">
      <h1>Hi {userName} You scored {result} points</h1>
    </div>
  )
}

export default Results