/*

React components has a built-in state object.
The state object is where you store property values that belong to the component.
When the state object changes, the component re-renders.

But State not use in function component before 16 version 2019 after 
Hooks functionality introduced 
The React useState Hook allows us to track state in a function component.

Import : Import useState

Create : var [name,setName]=usestate("Rajesh nagar");

Print : {name}
============================

var [mydata,setMydata]=usestate({
        id:"1",
        name:"Rajesh nagar",
        age:33,
        mobile:31548799
});
{mydata.name}


*/




import React, { useState } from 'react'
import Func_img from './Func_img';



function Func_state() {

    const [name, setName] = useState("Rajesh Nagar");

    const [data, setData] = useState({
        number: 1,
        isImage: true
    });

    return (
        <div className='container mt-5'>
            <button onClick={() => setName("Akash nagar")}>Change</button>
            <h1>{name}</h1>

            <hr />
            <button onClick={() => setData({ ...data, number: data.number + 1 })}>+</button>
            <h1>{data.number}</h1>
            <button onClick={() => setData({ ...data, number: data.number - 1 })}>-</button>

            <hr />
            <button onClick={() => setData({ ...data, isImage: false })}>Hide</button>
            <button onClick={() => setData({ ...data, isImage: true })}>Show</button>
            <button onClick={() => setData({ ...data, isImage: !data.isImage })}>Hide/Show</button>
            {
                data.isImage ? <Func_img /> : null
            }

        </div>
    )
}

export default Func_state