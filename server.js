var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res, next) {
	res.sendFile(path.join(__dirname, 'public', 'main.html'));
});

app.listen(3001);