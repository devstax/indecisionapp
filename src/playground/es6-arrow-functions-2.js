// arguments object - no longer bound with arrow function

const add = function (a,b) {
    return a + b;
}
console.log(add(55,1));
// this keyword - no longer bound

const user = {
    name: 'Stax',
    cities: ['Belgrade', 'Stuttgart', 'London'],
    /* method defining es6 Delete everything to the parameters*/ 
    printPlaceLived() {
        return  this.cities.map((city) => this.name + ' has lived in ' + city);
     // const that = this;    
    }
};

console.log(user.printPlaceLived());


const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());
