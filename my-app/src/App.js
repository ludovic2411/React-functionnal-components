import React, { Component } from 'react';
import './App.css';
import HelloComponent from './HelloClass';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div className="App-header">
          <HelloComponent name="Ludo"/>
        </div>
      </div>
    );
  }
}

export default App;
