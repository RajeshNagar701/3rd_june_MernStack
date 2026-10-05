/*
React Hooks
Hooks allow functions to have access to state and other React features without 
using classes.

Not use before 2019 , react version :16.8 so after that Hooks Introduced

They provide a more direct API to React concepts like 
props, state, context, refs, and lifecycle.

What is a Hook?
Hooks are functions that let you "hook into" React 
state and lifecycle features from functional components.

You must import Hooks from react.

Hook Rules
There are 3 rules for hooks:

Hooks can only be called inside React function components.
Hooks can only be called at the top level of a component.
Hooks cannot be conditional

useSatat   => built in object 
1) useState : MUTABLE OBJECT 

Context Hooks  =>  we can access globaly state, receive information from distant parents without passing it as props. 
2) createContext , useContext

Ref Hooks : when state change then comonent re-render ,so  ref does not re-render your component 
3)useRef

Effect Hooks : component Life cycle 3 Birth update Death 
4) useEffect

Performance Hooks: To skip calculations and unnecessary re-rendering, use one of these Hooks:
5) useMemo
6) useCallback


7) useRedfucer : is a React Hook for managing complex state using a reducer function and dispatched actions.


*/


import React from 'react'

function All_Hooks() {
  return (
    <div>All_Hooks</div>
  )
}

export default All_Hooks