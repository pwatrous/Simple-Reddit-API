const express = require("express");
const app = express();

// set port
const port = process.env.PORT || 3000;

app.get("/", (req, res) => { 
	res.json({ message: "Everything is working!" }); 
});

app.get("/subreddit/:subreddit_name", (req, res) => {
	res.json({ message: "This is where the json will be returned" });
});	

app.listen(port, () => {
	console.log('App listening on port: ' + port);
});