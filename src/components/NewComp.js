import React, { Component } from 'react'
import BellA from "./BellA.jpg"
import BellB from "./BellB.png"

export class NewComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Subscribe to Simplilearn",
         sub: "Subscribe",
         imageURL: BellB
      }
    }
    styles ={
        fontStyle:"italic",
        color: "purple"
      };
ButtonChange = () =>{
    this.setState({
        message: "Hit the bell icon to never miss an update",
        sub: "Subscribed"
    })
}
ImageChange = () =>{
    this.setState({
        imageURL: BellA,
        message: "Thank you, Happy Learning!"
    })
}
  render() {
    return (
        <div className='App'>
          <h3 style={this.styles}>{this.state.message}</h3>
          <button onClick={this.ButtonChange}>{this.state.sub}</button>
          <p>
          <img 
          style={{width:"30px", height:"30px"}} 
          src={this.state.imageURL} 
          onClick={this.ImageChange}
          alt="" />
          </p>
        </div>
    )
  }
}

export default NewComp