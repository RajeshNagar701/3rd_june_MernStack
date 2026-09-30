
/*

Sass is a CSS pre-processor.
Sass (Syntactically Awesome Stylesheets) is a CSS preprocessor 
that extends CSS by adding features like 

variables, 
nesting,
mixins,
extends 
and more, making it easier to write and maintain stylesheets. 

Sass files are executed on the server and sends CSS to the browser.

npm i sass

Create a Sass file : .scss

*/

import React from 'react'

import './mysass.scss'


function Sass_css() {
    return (
        <div className='container mt-5'>
            <div className='hedaer'>Hello Sass CSS</div>
            <hr />

            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Home</a></li>
                    <li><a href="">Home</a></li>
                    <li><a href="">Home</a></li>
                </ul>
            </nav>

            <p className='myproperties'>Hello i am nexted properties</p>
            <p className='myproperties1'>Hello i am nexted properties</p>

            <hr />

            <button className='button-basic'>Basic</button>
            <button className='button-danger'>Danger</button>
            <button className='button-primary'>primary</button>
            <button className='button-success'>success</button>
            <button className='button-orange'>Orange</button>
        </div>
    )
}

export default Sass_css