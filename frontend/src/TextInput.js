import React, { Component } from 'react';

class TextInput extends Component {
  render() {
    return (
      <div className="text-input">
      	<form>
  				<div class="form-group">
    				<label for="subreddit">Subreddit: </label>
    				<input type="subreddit" class="form-control" id="subreddit" placeholder="Enter a subreddit"></input>
  				</div>
					<button type="submit" class="btn btn-primary">Submit</button>
				</form>
    	</div>
    );
  }
}

export default TextInput;