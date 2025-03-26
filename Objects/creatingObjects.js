//objects literlas => key:value pairs enloused with curly braces
let person ={
    name: "Tejpal Choudhary",
    age: "27",
    address: "Jaipur, Rajasthan, 302012",
    email: "abc@email.com"
};
console.log(person);


//Object constructor 

person = new Object();
person.address = "India";
person.degree = "B.Tech" 
console.log(person);


//we have Object.create() method allows us to create object with specified prototype
let personPototype = {
    firstName: "",
    lastName: "",
    age: 0,
    password: "",
};
person1 = Object.create(personPototype);
person1.firstNameame = "dhruva";
person1.lastName = "jat";
person1.age =28;
console.log(person1);


// function constructor => function constructor invoked by new keyword to create object
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }
}
const person2 = new Person("Dhruva", 28);
console.log(person2);



// es6 class method
class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }
}
const person3 = new Person1("Dhruva", 29);
console.log(person3);


//object spread operator used to copy properties of an object

const person4 = {
    firstName: "dj",
    lastName: "jat",
    age: 30,
    email: "dj@email.com",
  };
  
  const newPerson = { ...person4, firstName: "dhruva" };
  console.log(person4)
  console.log(newPerson)
  //we discussed various types of object creation ways


