import React, { Component } from 'react';
import HalfView from './HalfView';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Compare.<span id="quicksand">it</span></h1>
        <div className="simple-reddit-api">
          <div className="half-view left-half">
            <HalfView/>
          </div>
          <div className="half-view right-half">
            <HalfView/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
