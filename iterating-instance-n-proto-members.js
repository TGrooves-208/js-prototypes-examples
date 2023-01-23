// Iterating instand and Prototype members examples
// New Circle object
function Circle(radius) {
    // Instance members
    this.radius = radius;
  
    this.move = function() {
      console.log('move');
    }
  }
  
  // Example 2
  const c1 = new Circle(2);
  console.log(c1);
  console.table(c1);
  
  // Prototype members
  // 1. It doesn't matter when you  modify the prototype before creating a {}
  // 2. Reason being we are dealing with object references
  // We have a single object in memory so all the changes are available
  Circle.prototype.draw = function() {
    console.log('draw');
  }
  
  // Example 1
  // const c1 = new Circle(1);
  // console.log(c1);
  // console.table(c1);
  
  // So how do we iterate instance vs prototype properties
  // Object with keys only returns instance members (aks "own")
  // Draw is not listed because it is a prototype member
  console.log(Object.keys(c1));
  console.table(Object.keys(c1));
  
  // How about the for in loop
  for(let key in c1) console.log(key);
  for(let key in c1) console.table(key);
  
  // Useful function for seeing the ownership of a property
  c1.hasOwnProperty('radius');
  console.log(c1.hasOwnProperty('radius')); // True because it is an instance member
  
  c1.hasOwnProperty('draw');
  // False becuase this property is on the prototype 
  console.log(c1.hasOwnProperty('draw'));