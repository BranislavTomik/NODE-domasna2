const http = require('http')
const url = require('url')
const fs = require('fs')



http.createServer((request, response) => {
        
    const users = fs.createReadStream('./package.json');
    response.writeHead(200, {'Content-type' : 'application/json'});
    users.pipe(response);

}).listen(3000);


