
/*
CSS Modules
Another way of adding styles to your application is to use CSS Modules.
CSS Modules are convenient for components that are placed in separate files.
The CSS inside a module is available only for the component that imported it, 
and you do not have to worry about name conflicts.

Create the CSS module with the .module.css extension, 

Create: my-style.module.css.

import : import A from './mycss1.module.css';

apply/Use: <div className={A.big_blue}></div>

*/



import React from 'react'

// normal css Import 
import './mstyle1.css'
import './mstyle2.css'

// module css load 

import A from './mstyle1.module.css'
import B from './mstyle2.module.css'



function Module_css() {
    return (
        <>
            <div className='container mt-5'>
                <div className='mybox'>Normal css</div>
                <hr />

                <div className={A.big_blue}>Module style 1</div>
                <div className={B.big_blue}>Module style 2</div>
            </div>
        </>
    )
}

export default Module_css