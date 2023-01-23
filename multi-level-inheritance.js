// Multi-level inheritance
// Let's define an array []
let myArray = [];
console.log(myArray);


// How about the Objects we create with constructors
function Circle(radius) {
    this.radius = radius;

    this.draw = function() {
        console.log('draw');
    };
}

// Objects created by a given constructor
// Will have the same prototypes
// If a new circle is created from the Circle constructor (same prototypes as the Circle)
// If a new array is created from the Array constructor (same prototyps as the array)
// Object base <- circleBase <- circle
const circle = new Circle(15);
console.log(Circle);
