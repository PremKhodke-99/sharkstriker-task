import React from 'react'

const Box = ({title, content, classN}) => {
  return (
    <div className={`box ${classN} border`}>
        <h5>{title}</h5>
        <p>{content}</p>
    </div>
  )
}

export default Box