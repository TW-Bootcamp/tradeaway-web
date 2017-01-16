import React, { Component } from 'react';
import axios from 'axios';
import logo from './images/logo.svg';
import './App.css';

class App extends Component {
    componentDidMount() {
        axios
            .get('/search')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>TRADEAWAY WEB</h2>
        </div>
      </div>
    );
  }
}

export default App;
