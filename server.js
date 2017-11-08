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
		console.log(Array.isArray(json));
		res.json({ data: json });
	});
});	

app.listen(port, () => {
	console.log('App listening on port: ' + port);
});