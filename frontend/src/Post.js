import React, { Component } from 'react';
import axios from 'axios';
 

class Post extends Component {
	constructor(props) {
  super(props);
  this.state = {
    title: "",
    url: ""
  };
}

	componentDidMount() {
		axios.get('/api/subreddit/' + 'news')
			.then(response => this.setState({ title: response.posts[this.props.id].title,
																				url: response.posts[this.props.id].url }));
	}

  render() {
    return (
      <div>
      	<h1>this.state.title</h1>
      	<h1>this.state.url</h1>
      </div>
    );
  }
}

export default Post;