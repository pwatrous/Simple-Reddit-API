import React, { Component } from 'react';
import PostContainer from './PostContainer';
import TextInput from './TextInput';

class HalfView extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	subreddit: ""
    }
  }

  handleChange(e) {
  	this.setState({ subreddit: e.target.value })
  }

  render() {
    return (
      <div className="half-view">
      	<TextInput handleChange={this.handleChange.bind(this)} value={this.state.subreddit} />
        <PostContainer subreddit={this.state.subreddit} />
      </div>
    );
  }
}

export default HalfView;