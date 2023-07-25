//port 
// url 
//routing

const http = require('http');
const server = http.createServer((request, responce) => {
    // console.log(request.url);

    if (request.url == '/') {
        responce.end("hello from the Home side");
    }

    else if (request.url == '/about') {
        responce.end("hello from the about side");
    }

    else if (request.url == '/contact') {
        responce.end("hello from the contact side");
    }
    else {
        responce.writeHead(404, { "Content-type": " text/html" });
        responce.end("<h1>404 Error : page is not found </h1>")
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log('listenig to the port of 8000')
})