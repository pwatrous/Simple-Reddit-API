var express = require("express");
var app = express();

// set port
var port = process.env.PORT || 3000;

var router = express.Router();

router.get("/", (req, res) => { 
	res.json({ message: 'hooray! welcome to our api!' }); 
});


app.listen(port);
console.log('App listening on port: ' + port);