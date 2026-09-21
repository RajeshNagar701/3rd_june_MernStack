/*

React components

React components are independent, reusable pieces of code that serve 
as the building blocks of a React application's user interface.

Types of Components
1) Funcion component  rfce/rfc
2) Class Component    rce/rcc 

Core Rules & Best Practices

1) Capitalized Names: exa:  Mycomponent
2) Single Parent Element:  (<> ...div </>)
3) Nesting Components: 

*/



//rfce
/*
import React from 'react'

function Func_component() {
  return (
    <div>Func_component</div>
  )
}

export default Func_component
*/


//rfc
import React from 'react'

export default function Func_component() {
  return (
    <div class="bg-primary p-5">
        <h1>Hi i am Function Component</h1>
    </div>
  )
}
