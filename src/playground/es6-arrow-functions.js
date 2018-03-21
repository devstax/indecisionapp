// ES 5
//const square = function(x){
//    return x * x;
//}

//console.log(square(8));

// ES6
//const squareArrow = (x) => {
//    return x * x;
//};

//const squareArrow = (x) => x * x;
//console.log(squareArrow(9));


// short-hand
const getFirstName = (fullName) => fullName.split(' ')[0];

// full-hand
//const getFirstName = (fullName) => {
//    return fullName.split(' ')[0];
//};

console.log(getFirstName('Stax Codes'));