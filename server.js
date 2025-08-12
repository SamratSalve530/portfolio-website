var express = require('express');
var server = express();
server.use(express.static('public'));

server.get('/', function(req, res) {
    res.render('index.ejs');
});

server.listen(3000);