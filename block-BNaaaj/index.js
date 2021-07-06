//console.log('welcome to node.js');

//var math = require('./math.js');
var path = require('path');
var os = require('os');
var fs = require('fs');
var filepath = path.join(__dirname,'content.md');

var freem = os.freemem();
var cpus = os.cpus().length;

var ver = os.version;

var uptime = os.uptime();

fs.readFile('./content.md',(err,content)=>{
    console.log(err,content.toString());
})

//console.log(filepath , '' , cpus , '' , freem, ' ' , ver,' ' , uptime);

