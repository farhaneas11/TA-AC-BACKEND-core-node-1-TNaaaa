var urlstring = "https://blog.altcampus.io:80/students/register?name=altcampus&gender=male";
var url = require('url');

var pasrseurl = url.parse(urlstring , true);

console.log(pasrseurl);
console.log(pasrseurl.pathname);
console.log(pasrseurl.query);
console.log(pasrseurl.host);
console.log(pasrseurl.protocol);