// Property Descriptors
let person = { name: 'Gil'};
console.log(person)

person.toString();
console.table(person);

// ********************************************************************************************
// Iterating through the object we won't be able to see the toString()
for (let key in person) // Adding a semicolon after this loop will give us undefined
console.table(key);
console.log(Object.keys(person));

// How come we can iterate through all of the props and methods in ObjectBase?
// Reason is properties have attributes that prevent iterations or better yet being enumerated
let objectBase = Object.getPrototypeOf(person); // This is our objectBase
// This returns an {} known as propertyDescriptor
console.table(objectBase);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString'); 
console.table(descriptor);
console.log(descriptor);

// *******************************************************************************************************
let persona = { nombre: 'Gilberto'};
// To define a getter and a setter we use the following example below
// 1st arg persona, 2nd target, 3rd proptery descriptor {}
Object.defineProperty(persona, 'nombre', {
  writable: false, // becomes read only
  enumerable: false, // if set to false it will display an empty array
  configurable: false,
});
// The name won't change
persona.nombre = 'Antonio';
// Setting configurable to false the delete method won't work
console.log(persona)
console.log(Object.keys(persona)); // Gives an empty array
delete person.nombre;
console.table(persona);

// Takeaway by default all of the attributes are set to true

