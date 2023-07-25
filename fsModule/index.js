const fs = require('fs');

//create synchronous file 
fs.writeFileSync('app.txt', 'this is a app file');
fs.writeFileSync('app.txt', 'this is a app file data');
fs.writeFileSync('test.txt', 'this is a app file data');

//add data in file 
fs.appendFileSync('app.txt', '. app data should be secure')
fs.appendFileSync('app.txt', '. this is cool file')

//rename file
fs.renameSync('app.txt', 'data.txt')

//read file - get data in buffer
//(buffer is additional data type which is not available in javascript)

const buf_data = fs.readFileSync("data.txt", "utf8");
console.log(buf_data);
// console.log(buf_data.toString());

//remove file 
// fs.unlinkSync('test.txt')

//make directory
// fs.mkdirSync('app/apps');
// fs.rmdirSync('app');

//create file in directory
// fs.writeFileSync('app/apps/rio.txt', 'this is rio file');

// fs.unlinkSync('bio.txt');



