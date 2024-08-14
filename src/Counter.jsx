import React from 'react'

const Counter = (props) => {
  console.log(props)
  console.log(props.value)
  return (
    <div>
      <h1>This is counter page</h1>
      {
        props.value.map((ele) => {
          return <p>{ele}</p>
        })
      }  

    </div>
  )
}

export default Counter




