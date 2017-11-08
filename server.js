const express = require("express");
const app = express();
const request = require("request");

// set port
const port = process.env.PORT || 3000;

app.get("/", (req, res) => { 
	res.json({ success: "Everything is working!" }); 
});

app.get("/subreddit/:name", (req, res) => {
	let url = "http://www.reddit.com/r/" + req.params.name + ".json";
	request(url, function(error, response, body) {
		let json = JSON.parse(body).data.children;
		// fetches the subreddit name from the json response
		let nameOfSubreddit = json[0].data.subreddit;
		let subredditPosts = {};
		for (let i = 0; i < json.length; i++) {
			subredditPosts[i] = {};
			subredditPosts[i].title = json[i].data.title;
			subredditPosts[i].url = json[i].data.url;
		}
		res.json({ subreddit: nameOfSubreddit, posts: subredditPosts });
	});
});	

app.listen(port, () => {
	console.log('App listening on port: ' + port);
});