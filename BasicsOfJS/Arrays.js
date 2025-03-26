/* arrays are basically used for stored the collections of data and 
array are fundamantal data structure and highly versatile.

I will discussed the complete array including array

*/

// creation an array using arrary literal

let arr = [1,2,3,4,5];
// let arr1 = ['hello', 'ji', 'I am', 'an', 'array'];
// let arr2 = [1,2,3,'hello', 'ji', [1,2,3,4,'I am', 'an array in an array']];

// console.log("arr is here  ==> " + arr);
// console.log("arr1 is here ==> " + arr1);
// console.log("arr2 is here ==> " + arr2);


// creation of array using Array Constructor 

// let numbers = new Array(1,2,3,4,5,56);


//The Array.of() method 
// creates a new array with a variable number of arguments, regardless of the number or type of the arguments.

// let arr = Array.of(1, 2, 3, 4, 5);
// console.log(arr);  // Output: [1, 2, 3, 4, 5]



//========> Accessing an aray element


// console.log(arr[indexNumber]);  
// ex:-
//  let x = arr[1];
//  console.log('element of an array at index of 1')



// ==========> Modifiy the index element

// arr[1] = 'I am modified element at index 1';
// console.log(arr);



// =========>  How to calculate length of an Array  arr.length


console.log( 'length of an array is ' + arr.length);




//==============>  Iteration of an array using forEach, for, while, for of etc.


//===>     forEach

arr.forEach(element => {
    console.log(element);
});


// for in loop

for(let i of arr){
    console.log(i)
}