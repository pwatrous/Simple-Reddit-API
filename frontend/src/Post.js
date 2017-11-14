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
			.then(response => this.setState({ title: response.data.posts[this.props.id].title,
																				url: response.data.posts[this.props.id].url }));
	}

  render() {
    return (
      <div>
      	<a href={this.state.url} target="blank">{this.state.title}</a>
      </div>
    );
  }
}

export default Post;