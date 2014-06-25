var express = require('express');
var server = require('./server/basic-server.js');
var handler = require('./server/request-handler.js').handler;



var port = process.env.PORT || 1337;

var app = express();

app.use(express.static(__dirname + '/client'));

app.get('/classes', handler);

app.post('/classes', handler);

app.listen(port);
