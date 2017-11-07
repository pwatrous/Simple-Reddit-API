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
	let json;
	request(url, (error, response, body) => {
		json = body;
		console.log(json);
		res.json({ data: "This is where the json will be returned" });
	});
});	

app.listen(port, () => {
	console.log('App listening on port: ' + port);
});