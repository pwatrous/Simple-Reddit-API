import React, { Component } from 'react';
import PostContainer from './PostContainer';
import TextInput from './TextInput';

class HalfView extends Component {
  render() {
    return (
      <div className="half-view">
      	<TextInput/>
        <PostContainer/>
      </div>
    );
  }
}

export default HalfView;