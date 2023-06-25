import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
// import StateInAction from './StateInAction'
import SimpleEvents from './SimpleEvents'


class App extends Component {
  render(){
  return (
    <div className="App">
      <SimpleEvents/>
    </div>
  );
}
}

export default App;
