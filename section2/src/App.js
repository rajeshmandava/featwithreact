import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import StateInAction from './StateInAction'

class App extends Component {
  render(){
  return (
    <div className="App">
      <h1>State Check!</h1>
      <StateInAction name="Rob"/>

    </div>
  );
}
}

export default App;
