var http = require('http');
var url = require('url');
var server = http.createServer(handlereq);

function handlereq(req,res){
    var parseurl = url.parse(req.url);
    var pathurl = parseurl.pathname;
    console.log(req.method,req.url,parseurl );

    res.writeHead(200,{'content-type':'text/html'});
    res.end('<h1>welcome</h1>');


    if(req.method === 'GET' && req.url === '/'){
        res.setHeader('content-type' , 'text/html');
        res.end('<h4>welcome to index page</h4>')
    }
    else if(req.method === 'GET' && pathurl === '/users'){
        res.setHeader('content-type' , 'text/html');
        res.end('<h3>users page</h3>')
    }
    else if(req.method === 'GET' && pathurl === '/about'){
        res.setHeader('content-type' , 'text/html');
        res.end('<h1>About page</h1>')
    }
    else{
        res.writeHead(404,{'content-type' : 'text/html'});
        res.end('<h2>About page</h2>')
    }
}
server.listen(3000,()=>{
    console.log('server created');
})