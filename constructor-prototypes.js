// Constructor Prototypes
// Object.getPrototypeOf(myObj);

// We essentially get here
// myObj.__proto__ (parent of myObj)
// Constructors also have a prototype property
// Constructor.prototype () 
// Object.prototype
// These are both the same

function Circle(radius) {
  this.radius = radius;
}

const circle = new Circle(5);

// Object literal syntax this is translated into a new Object()
let obj = {}; // objectBase

let array = [];
// Array.prototype this refereneces arrayBase the same {}
// array.__proto__;