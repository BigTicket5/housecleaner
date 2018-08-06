import React, { Component } from 'react';
import logo from './logo.svg';
import {Button} from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Button>Hello</Button>
      </div>
    );
  }
}

export default App;