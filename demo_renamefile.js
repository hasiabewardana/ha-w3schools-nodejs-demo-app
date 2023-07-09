var fs = require('fs');

fs.rename('mynewfile1.txt', 'myrenamednewfile1.txt', function(err){
    if(err) throw err;
    console.log('File renamed!');
});