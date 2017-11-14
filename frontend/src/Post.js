import React, { Component } from 'react';

class Post extends Component {
  render() {
    return (
      <div className="post">
      	<a href={this.props.url} target="blank">{this.props.title}</a>
      </div>
    );
  }
}

export default Post;