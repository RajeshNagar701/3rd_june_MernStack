/*
React Class Components

Before React 16.8, Class components were the only way to track state and 
lifecycle on a React component. Function components were considered "state-less".

With the addition of Hooks, Function components are now almost equivalent 
to Class components. The differences are so minor that you will probably 
never need to use a Class component in React.

The component has to include the extends React.Component statement, 
this statement creates an inheritance to React.Component, and gives your 
component access to React.Component's functions.

The component also requires a render() method, this method returns HTML.



*/

//rce
/*
import React, { Component } from 'react'

export class Class_component extends Component {
  render() {
    return (
      <div>Class_component</div>
    )
  }
}
export default Class_component
*/

// rcc
import React, { Component } from 'react'

export default class Class_component extends Component {
  render() {
    return (
      <div class="bg-info p-5">
        <h1>Hi i am Class Component</h1>
      </div>
    )
  }
}
