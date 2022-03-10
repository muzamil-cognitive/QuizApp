import React from 'react'

const MultiSelect:React.FC<any> = ({handleAnswer}) => {
  return (
    <div onClick={()=>handleAnswer('object')}>MultiSelect</div>
  )
}

export default MultiSelect