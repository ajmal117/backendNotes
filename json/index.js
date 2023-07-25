const bioData = {
    name: "ajmal",
    class: 10,
    branch: "computer"
}
// console.log(bioData.branch);

//convert into json

const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

//again convert jsonData in object file 

// const objData = JSON.parse(jsonData);
// console.log(objData);

// create a file and add bioData into it.

const fs = require('fs');

// fs.writeFile('jsonFile.json', jsonData, (err) => {
//     console.log(err);
//     console.log('done')
// })

//read json data through a path or api 

fs.readFile('jsonFile.json', 'utf-8', (err, data) => {
    console.log(err)
    console.log(data)
    const orgData = JSON.parse(data);
    console.log(orgData);
})



