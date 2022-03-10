import React from 'react'
import '../Styles.css'

const MultiChoice:React.FC<any> = ({answers,handleAnswer}) => {
  return (
    <ul className='answer_container'>
      {answers.map((item:string,idx:number)=>(
        <li key={idx} onClick={()=>(handleAnswer(item.toString()))}>{item}</li>
      ))}
    </ul>
  )
}

export default MultiChoice