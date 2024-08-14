import React, { useState } from 'react'

const Trial = () => {
  const[x,setx]=useState(0);
    const incrementCount=()=>{
        setx(x+1);

    }

    // const[value(variable),setValue(function)]=useState(6)

  return (
    <div>
        <button onClick={incrementCount}>increament</button>
        <h1>{x}</h1>


    </div>
  )
}

export default Trial
