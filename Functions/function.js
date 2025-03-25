// it is hoisted and it can call before the declaration of the function
greet(10);
function greet(value){
    console.log('hy this is the given value:'+value);
}
greet(5);



const operation = Math.random() > 0.5 ? "add" : "subtract";

const calculate = function(a, b) {
  if (operation === "add") return a + b;
  else return a - b;
};

console.log(calculate(5, 3)); // Output: 8 or 2 (random)