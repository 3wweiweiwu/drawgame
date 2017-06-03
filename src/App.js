import React, { Component } from 'react';

import './App.css';



const Button=(props)=>{
  return(
    <button onClick={()=>{props.onClickFunction(props.increaseValue)}}>
      {props.increaseValue}
    </button>
)};



const Result= (props)=>{
  return(
    <div>{props.counter}</div>
  );
}
class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      counter: 0
    }
  }
  state={counter:0}
  increaseCounter=(increaseValue)=>{
    this.setState((prevState)=>({
      counter:prevState.counter+increaseValue
    }));
  }

  
  render() {
    return (
      <div>
        <Button onClickFunction={this.increaseCounter} increaseValue={99}/>
        <Result counter={this.state.counter}/>
      </div>
    );
  }
}

export default App;
