const http = require('http');
const fs = require('fs');

http.createServer((request, response)=>{
  const file = request.url == '/'? "./WWW/index.html" : `./WWW${request.url}`;
  fs.readFile(file, (err, data)=>{
    if(err){
      response.writeHead(404, {"Content-Type":"text/plain"});
      response.write("Not found");
      responde.end();
    }else{
      response.writeHead(200, {"Content-Type":"text/plain"});
      response.write(data);
      responde.end();
    }
  });
}).listen(4444);

// 80 HTTP - 443 HTTPS
