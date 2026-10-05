import React, { useContext } from 'react'
import { DataContact } from './A'


function D() {

  const { name, setName }=useContext(DataContact);
  return (
    <div>
         <button onClick={() => setName("Pinal nagar")}>Change D</button>
        <h1>Hi i am from D : {name}</h1>
    </div>
  )
}

export default D