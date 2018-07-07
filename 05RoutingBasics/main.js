var http = require('http');
var routing = require('./routing');

http.createServer(routing.handleRequest).listen(8000);