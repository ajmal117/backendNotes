const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    //data will be readout only once with 1st time of render
    const data = fs.readFileSync(`${__dirname}/userData/json1.json`, 'utf-8');
    const ojbdata = JSON.parse(data);


    console.log(req.url);

    if (req.url == '/') {
        res.end('this is home page data')
    }
    else if (req.url == '/about') {
        res.end('this is about page data')
    }
    else if (req.url == '/contact') {
        res.end('this is contact page data')
    }
    else if (req.url == '/userapi') {
        res.writeHead(200, { "Content-type": "application/json" })
        // res.end(data);
        res.end(ojbdata[0].title);
        console.log(ojbdata);
    }

    else {
        res.writeHead(404, { "content-type": "text/html" });
        res.end('<h1>404 error : page not found</h1>');
    }
});

server.listen(7000, '127.0.0.1', () => {
    console.log('server is created on port 7000');
})