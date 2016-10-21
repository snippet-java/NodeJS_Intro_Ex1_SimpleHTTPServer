var port = (process.env.VCAP_APP_PORT || 8192);
var host = (process.env.VCAP_APP_HOST || 'localhost');
var vcapApp = JSON.parse(process.env.VCAP_APPLICATION);
var logPrefix= vcapApp.application_name + vcapApp.instance_index;
var http = require('http');
http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type' : 'text/plain'});
  res.end('Hello World from instance - ' + logPrefix + '\n');     	  
}).listen(port, host);
console.log('Server running now');
