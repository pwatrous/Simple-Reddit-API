import React, { Component } from 'react';
import HalfView from './HalfView';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Compare.<span id="quicksand">it</span></h1>
        <h5>Select two different subreddits to compare their front pages. After you've 
        chosen a subreddit, click anywhere outside of the text box to load that subreddit.</h5>
        <div className="simple-reddit-api">
          <div className="half-view left-half">
            <HalfView/>
          </div>
          <div className="half-view right-half">
            <HalfView/>
          </div>
        </div>
        <footer>Made with <span style={{color: "#e25555"}}>&#9829;</span> by Patrick</footer>
      </div>
    );
  }
}

export default App;
