var http = require('http');

var server = http.createServer(handlerequest);

function handlerequest(req,res){
    console.log(req.method,req.url);
    console.log(req.headers);
    res.end('welcome');
}

server.listen(3000,()=>{
    console.log('server listening on server 3000');
})