import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {

  constructor(){
    super();  
    this.state={
      temp:""
    }
  }

  componentDidMount(){
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=e312dbeb8840e51f92334498a261ca1d'
    console.log("calling render again");
    axios.get(url).then((resp)=>{
      this.setState({
        temp:resp.data.main.temp
      })
    })

  }

  render(){


  
  return (
    <div className="App">
     <h1>{this.state.temp}</h1>
    </div>
  );
}
}

export default App;
