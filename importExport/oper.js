const add = (a, b) => {
    return a + b;
}
const sub = (a, b) => {
    return a - b;
}
const mult = (a, b) => {
    return a * b;
}


const name = 'ajmal';


// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.mult = mult;
// module.exports.name = name;

// Object destructuring

module.exports = { add, sub, mult, name }; 