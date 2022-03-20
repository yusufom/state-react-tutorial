import './App.css';
import React, { Component } from 'react';
import NewComp from './components/NewComp';


class App extends Component {
  styles ={
    fontStyle:"bold",
    color: "teal"
  };
  render() {
    return (
      <div className='App'> 
        <h3 style={this.styles}>Welcome</h3>
        <NewComp/>
      </div>
    );
  }
}

export default App;