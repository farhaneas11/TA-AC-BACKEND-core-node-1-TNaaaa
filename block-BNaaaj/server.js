var urlstring = `https://airindia.com/fares/calculate?from=delhi&to=detroit`;

var url = require('url');

var urlparse = url.parse(urlstring,true);


console.log(urlparse);
console.log(urlparse.pathname);
console.log(urlparse.protocol);
console.log(urlparse.hostname);