import React, { Component } from 'react';

class TextInput extends Component {
  render() {
    return (
      <div className="text-input">
  				<div className="form-group">
    				<label>Subreddit: </label>
    				<input type="text" 
    				       className="form-control" 
    				       id="subreddit" 
    				       value={this.props.subreddit}
    				       onBlur={this.props.handleChange}
    				       placeholder="Enter a subreddit"></input>
  				</div>
    	</div>
    );
  }
}

export default TextInput;