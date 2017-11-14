import React, { Component } from 'react';
import Post from './Post';

class PostContainer extends Component {
  render() {
  	let posts = [];
  	for (let i = 0; i < 25; i++) {
  		posts.push(<Post id={i}/>);
  	}
    return (
      <div className="PostContainer">
      	{posts}
      </div>
    );
  }
}

export default PostContainer;

