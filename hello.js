var http = require('http'); //Import the http module
var myServer = http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type" : "text/plain"});
	response.write("Hello");
	response.end();
});	//Create a server

myServer.listen(3000);
console.log("Go to http://localhost:3000 in your browser");