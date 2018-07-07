var http = require('http');
var fs = require('fs');

http.createServer((request,response)=>{
	response.writeHead(200,{'Content-Type':'text/html'});
	fs.readFile('./index.html',null,(error,data)=>{
		if(error){
			response.writeHead(404);
			response.write('File not found, sorrillo');
		}
		else{
			response.write(data);
		}
		response.end();
	})
})
.listen(8000);