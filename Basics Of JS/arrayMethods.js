/*There are sevral types of methods in array 
push()
pop()
shift()
unshift()
splice()
slice()
map()
filter()
reduce()
find()
findIndex()
forEach()
*/

//=============>  push()  this method is used for the adding elements at the end of the array and return new length

let fruits = ["apple", "banana", "mango"];
console.log(fruits);
 let x = fruits.push("cherry", "water-melon");
console.log(x);   // this will return the length of the updated array 
console.log(fruits);

//======>   pop()  this method is delete the element form the end of the array this only delete single element at once

fruits.pop();
console.log(fruits);

//=======> shift()  method this method remove the first element of an array and retrun the element

x = fruits.shift();
console.log( "firat element is removed :-",x);
console.log(fruits); // this will print the remening array



// ====>   unshift()   this will add one or more elements at the begenning of the array

fruits.unshift("hello ji", " unshift is adding at the start of the array")
console.log(fruits); // this will print the array



//=====>   splice(add, remove, insertElement)  this method contains the 3 elements startIndex, numberOf Idex to be deleted, no of elements to be add from the startIndex
//splice(startIndex, deleteNoelements, elementsToBeAdded)


fruits.splice(1,1,"long", "ellaychai", "coconut");
console.log(fruits); // this will print the array



//==========>     slice(startIndex, endIndex) this will remove the elements from the start index to end index(does not count end index) and return the new trimed array
let fruit = fruits.slice(1,4);   //slice() method does not modify the orignal array
console.log(fruit);
console.log(fruits);

// it can use to copy of an array by just set empty the slice() method
let newFruit = fruits.slice();



//=====> filter() this method will filter and create new array that passed the all elements;

let arr = [1,2,3,4,5,6,7,8,9,10];
let newArr = arr.filter((num) => num % 2 === 0);
console.log(arr);
console.log(newArr);



