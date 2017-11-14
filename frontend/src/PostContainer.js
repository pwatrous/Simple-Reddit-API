import React, { Component } from 'react';
import Post from './Post';
import axios from 'axios';

class PostContainer extends Component {
	constructor(props) {
  super(props);
  this.state = {
    titles: [],
    urls: []
  };
}

  render() {
  	axios.get('/api/subreddit/' + this.props.subreddit)
			.then(response => {
				let titleArray = [];
				let urlArray = []
				for (let i = 0; i < Object.keys(response.data.posts).length; i++) {
					titleArray.push(response.data.posts[i].title);
					urlArray.push(response.data.posts[i].url);
				}
				this.setState({ titles: titleArray, urls: urlArray });
			})
			.catch(function (error) {
    		console.log(error);
  		});

  	let posts = [];
  	for (let i = 0; i < 25; i++) {
  		posts.push(<Post key={i} title={this.state.titles[i]} url={this.state.urls[i] }/>);

  	}
    return (
      <div className="PostContainer">
      	{posts}
      </div>
    );
  }
}

export default PostContainer;

