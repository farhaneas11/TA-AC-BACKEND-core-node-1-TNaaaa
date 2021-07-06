var http = require('http');
var server = http.createServer(handlerequest);

var fs = require('fs');

function handlerequest(req,res){   
    

    if(req.method === 'GET' && req.url === '/'){
        res.write('starting page');
        res.end()
    }
    if(req.method === 'GET' && req.url === '/about'){
        res.setHeader('content-type' , 'text/html');        
        fs.createReadStream('./about.html').pipe(res);
    }
    if(req.method === 'GET' && req.url === '/stream'){
        res.setHeader('content-type' , 'text/html');        
        fs.readFile('./about.html',(error,content)=>{
            if(error) console.log(error);
            console.log(content);
        })
    }
}

server.listen(3000,()=>{
    console.log('server created');
})