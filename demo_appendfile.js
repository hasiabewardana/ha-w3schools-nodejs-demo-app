var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'This is the content.', function(err){
    if(err) throw err;
    console.log('Saved!');
});