var fs = require('fs');
var rs = fs.createReadStream('./myrenamednewfile1.txt');

rs.on('open', function() {
    console.log('The file is open');
});