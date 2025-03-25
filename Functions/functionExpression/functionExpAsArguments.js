// as we know that function expression are often used as arguments to other functions
let names = ["sneha", "Tejpal", "Mahesh"];
names.forEach(function(name) { // here we are simply usnig funtion expression 
    console.log("Hello, " + name + " !");
});


let name = ["Dr. sneha", "Eng. Tejpal", "mrs. Mahesh"];
name.forEach((name) => {  //here we are using arrow funtion 
    console.log("Hello, " + name + " !");
});


// we can use any type of function which contins arguments