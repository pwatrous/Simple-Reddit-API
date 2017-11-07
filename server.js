var express = require("express");
var app = express();

// set port
var port = process.env.PORT || 3000;

var router = express.Router();

router.get("/", (req, res) => { 
	res.json({ message: "Everything is working!" }); 
});

router.get("/subreddit/:subreddit_name", (req, res) => {
	res.json({ message: "This is where the json will be returned" });
})


app.listen(port);
console.log('App listening on port: ' + port);