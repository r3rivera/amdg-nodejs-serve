const http = require('http');

//Handles the Request
const server = http.createServer((request, response) => {
    console.log('Got Request');
});


//Starts the server
server.listen(3000);