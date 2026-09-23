import React from 'react'

import './css/style.css'

/*
Boosttrap :
if we want use bootstrap class then just load bootstrap  cdn in public/index.html
we can now access all class in all component

*/
function Css_react() {

    let mystyle = { color: 'red', backgroundColor: 'yellow' }
    return (
        <div className='container mt-5'>
            <h1 style={{ color: 'red', backgroundColor: 'yellow' }}>Hi Inline css</h1>

            <hr />
            <h1 style={mystyle}>Hi i am internal css</h1>
            <h1 style={mystyle}>Hi i am internal css</h1>
            <h1 style={mystyle}>Hi i am internal css</h1>

            <hr />

            <div className="mybox"> hi i am external css</div>
            <div class="mybox"> hi i am external css</div>


            <button className='btn btn-primary mt-5'>My Button</button>
            
        </div>
    )
}

export default Css_react