import React, { Component } from 'react';
import { hot } from "react-hot-loader/root";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <p>
            Edit <code>src/App.js</code> and watch the magic happen!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default hot(App);
