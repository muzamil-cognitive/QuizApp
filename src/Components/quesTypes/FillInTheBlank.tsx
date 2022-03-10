import React, { useState } from 'react'

const FillInTheBlank:React.FC<any> = ({handleAnswer}) => {
  const [value,setValue] =useState('')
  const handleChange =(event: React.ChangeEvent<HTMLInputElement>)=>{
    setValue((event.target as HTMLInputElement).value)
  }
  return (
    <div>
<input onChange={handleChange} value={value}/>
<button onClick={()=>handleAnswer(value)}>Submit</button>
    </div>
  )
}

export default FillInTheBlank