// Prototypes vs instance Members
// Circle constructor with two members
function Circle(radius) {
    this.radius = radius;
    // 1. We have instance members
    // When we refactor we no longer need the draw method on the obj instance
    // this.draw = function() {
   //   console.log('draw'); // Move this down so that it isn't expensive
    // }
    this.move = function() {
      this.draw();
      console.log('move'); // "44.2" We can now access this in our prototype ()
    }
  }
  
  // Every constructor has a prototype property
  // Circle.prototype === c1.__proto__ -deprected but they reference the circleBase
  // JS Objects are dynamic so we can always add something later if we want
  // Prototype members
  Circle.prototype.draw = function() {
    // 2. We have prototype members
    // Move the implementation of the draw function inside of here
    // In an instance method we can reference in a prototype member "21.1"
    // It will find this on the prototype method 
    // this.move(); // "44.3" delete this for example 
    console.log('draw');
  }
  // Two circle objects
  const c1 = new Circle(1);
  const c2 = new Circle(2);
  
  console.log(c1);
  console.table(c1)
  
  console.log(c2);
  console.table(c2);
  
  // Let's say we have 1000 Circles there will be a 1000 copies of the draw method
  c1.draw();
  console.log(c1.draw, "This is the refactoring in action");
  
  // Let's overwrite some stuff
  // JS looks at our Circle object first
  // If it is not there then it looks at its prototype
  // This is the implementation that will be used because it is more accessible
  Circle.prototype.toString = function() {
    return 'Circle with radius ' + this.radius;
  };
  
  // This is all about instance versus prototype members
  // In both we can always reference other members
  // We can always call the instance method on the class "44.1"
  
  c1.toString();
  console.log(c1.toString);
  console.log(c1.toString());
  console.table(c1);
  
  c1.move();
  console.log(c1.move);
  console.table(c1.move)