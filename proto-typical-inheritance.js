// The most confusting part about JavaScript OOP based programming
// Centers around the fact that everything in JS is an Object
// The Parent (This is considered a Prototype)
// The Prototype has some type of "shape"
// The Shape has all of the functionality defines all of the members in it's Prototype
// We can call the "Shape" the object base
// Every object created inherits directly or indirectly from object base or the "shape"
// Every Object has a constructor that references the 
// function that was referenced to create that object
// This is just a standard look at a prototype
x.toString();
let x = {};
x.toString();
console.log(x);
let y = {};
Object.getPrototypeOf(x)
Object.getPrototypeOf(x) === Object.getPrototypeOf(y)
console.table(Object.getPrototypeOf(x) === Object.getPrototypeOf(y)
);
// Prototypical inheritance
// JS Engine (looks for the method on the object, next 
// it will look at the prototype chain behavior
// A prototype is just a regular object

