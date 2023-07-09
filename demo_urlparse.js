var url = require('url');
var address = 'http://localhost:8080/default.htm?year=2017&month=february';
var parsedAddress = url.parse(address, true);

console.log(parsedAddress.host);
console.log(parsedAddress.pathname);
console.log(parsedAddress.search);

var queryData = parsedAddress.query;
console.log(queryData.month);