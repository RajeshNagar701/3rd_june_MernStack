import React from 'react'

function D({name,setName}) {
  return (
    <div>
         <button onClick={() => setName("Akash nagar")}>Change D</button>
        <h1>Hi i am from D : {name}</h1>
    </div>
  )
}

export default D