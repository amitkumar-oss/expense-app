import React from 'react'

const Contact = (props) => {
  console.log(props.value)
  props.value(2)
  

   

  return (
    <div>
      <h1>This is contact page</h1>
    </div>
  )
}

export default Contact



