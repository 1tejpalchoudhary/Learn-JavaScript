// The key difference between properties and methods is that properties store data, while methods perform actions or operations. However, in JavaScript, both properties and methods are accessed in a similar way using dot or bracket notation. It's common to use properties to store data and methods to encapsulate behavior related to the object.

const calculator = {
    add: function (a, b) {
      return a + b;
    },
    subtract(a, b) {
      return a - b; // Shorthand method syntax
    },
  };
  
  console.log(calculator.add(5, 3)); // Using the add method
  console.log(calculator.subtract(7, 2)); // Using the subtract method



  const person = {
    firstName: 'Tejpal',
    lastName: 'Choudhary',
  };
  
  // Getting the property descriptor
  let descriptor = Object.getOwnPropertyDescriptor(person,  'firstName');
  console.log(descriptor);
  
  // Modifying the property descriptor
    Object.defineProperty(person, 'lastName', {
      writable: false,
      configurable: false,
    });
     descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
    console.log(descriptor);
  
  // Attempting to change the lastName property (will not work due to the descriptor)
  person.lastName = 'jat';
  person.firstName = 'Dhruva';
  console.log(person.lastName); // Output: "Choudhary"
  console.log(person.age); // Output: "undefined"