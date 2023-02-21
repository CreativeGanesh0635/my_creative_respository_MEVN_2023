var url = require('url');
var adr = "https://www.geeksforgeeks.org/difference-between-package-json-and-package-lock-json-files";
var q =url.parse(adr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata = q.query;
console.log(qdata.month);
