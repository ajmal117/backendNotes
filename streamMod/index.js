


const http = require("http");
const fs = require("fs");


const server = http.createServer();
server.on('request', (request, responce) => {

    //1st way to read data directly -
    // fs.readFile('input.txt', "utf-8", (err, data) => {
    //     if (err) return console.log(err);
    //     console.log(data);
    //     responce.end(data.toString());
    // });

    //2nd  way 
    // reading data from a stream 
    // create a readable stream
    // events - data,end,and error

    // const rstream = fs.createReadStream('input.txt');

    // rstream.on('data', (chunkData) => {
    //     responce.write(chunkData)
    //     console.log(chunkData)
    // });
    // rstream.on('end', () => {
    //     responce.end();
    // })
    // rstream.on('error', (err) => {
    //     console.log(err);
    //     responce.end('File not Found');
    // })



    // 3rd way to get data of stream
    const rstream = fs.createReadStream('input.txt');
    rstream.pipe(responce);


});



server.listen(8000, '127.0.0.1', () => {
    console.log('listening to port no : 8000');
})






