/*
Using the state Object
Refer to the state object anywhere in the component by using the 

constructor(){
    super();
    this.state = {
            name: "Rajesh Nagar",
    }
}

print : {this.state.name}


Changing the state Object
To change a value in the state object, use the this.setState() method.

this.setState({name: "Akash nagar"})

*/



import React, { Component } from 'react'
import Class_img from './Class_img';

export class Class_state extends Component {

    constructor() {
        super();
        this.state = {
            name: "Nagar",
            number: 1,
            IsImage: true
        }
    }

    render() {
        return (
            <div className='container mt-5'>
                
                <button onClick={()=> this.setState({name:"Akash nagar"})}>Change</button>
                <h1>{this.state.name}</h1>

                <hr />

                <button onClick={()=> this.setState({number:this.state.number+1})}>+</button>
                <h1>{this.state.number}</h1>
                <button onClick={()=> this.setState({number:this.state.number-1})}>-</button>

                <hr />
                
                <button onClick={()=> this.setState({IsImage:false})}>Hide</button>
                <button onClick={()=> this.setState({IsImage:true})}>Show</button>
                <button onClick={()=> this.setState({IsImage:!this.state.IsImage})}>Hide/Show</button>
                {
                    this.state.IsImage?  <Class_img/> : null
                }
               
            
            
            </div>
        )
    }
}

export default Class_state