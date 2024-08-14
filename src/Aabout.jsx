import React, { useState } from 'react'


const Aabout = () => {
    const [X,setX]=useState(false)
    console.log(X)

    const handleSwap=()=>{
        if(X===false){
            setX(true)
        }
        else{
            setX(false)
        }
    

    }
  return (
    <div>
      <h1>This is about page </h1>
      {/* {x ? <h1>this is heading one</h1>:<h1>this is heading two</h1>} */}
      { X && <h1>this is heading one</h1>}
      { !X && <h1>this is heading two</h1>}

    </div>
  )
}

export default Aabout
