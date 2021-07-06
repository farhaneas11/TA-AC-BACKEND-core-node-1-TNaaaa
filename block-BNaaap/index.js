var http = require('http');

var server = http.createServer(handlerequest);

function handlerequest(req,res){
    res.statusCode = 400;
    res.setHeader('content-type','text/html');

    res.writeHead(200,{'content-type':'text/html'});

    res.end('<h1>welcome</h1>');
}

server.listen(4444,()=>{
    console.log('there it comes server 4444');
})