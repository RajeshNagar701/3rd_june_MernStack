/*
What is Prop Drilling?
Anyone who has worked in React would have faced this and if not then will face it definitely. 
Prop drilling is basically a situation when the same data is being sent at almost every level 
due to requirements in the final level. 

Here is a diagram to demonstrate it better. 
Data needed to be sent from Parent(A) to Child(D) . 

YOU PASS STATE A TO D
PROBLEM IS NOT REQUIREMENT IN B,C SO ITS SLOW PROCEES
==============================================================
SO now sollution useContext(),createContext() hooks introduced

*/


import React, { useState } from 'react'
import B from './B';

function A() {
    const [name, setName] = useState("Rajesh Nagar");
    return (
        <div className='container mt-5'>
            <button onClick={() => setName("Akash nagar")}>Change A</button>
            <h1>Hi i am from A : {name}</h1>
            
            <hr />

            <B name={name} setName={setName}/>
        </div>
    )
}

export default A