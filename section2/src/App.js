import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
// import StateInAction from './StateInAction'
// import SimpleEvents from './SimpleEvents'
// import EventAndState from './SimpleEvents';
// import StatePractice from './StatePractice';
import CardSet from './CardSet';
import cards from './cards'

// console.log(cards)

class App extends Component {
  render(){
  return (
    <div className="App">
      <div className="row">
      <CardSet cards={cards}/>
        
        </div>
    </div>
  );
}
}

export default App;
