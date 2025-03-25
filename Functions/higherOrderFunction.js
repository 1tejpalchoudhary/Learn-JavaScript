// Higher order functions is a function that operats on functions by taking functions as arguments and return function as results
// we also called higher order functions as first class function 

function arrayOperation(array, operation){
    return operation(array)
};
function sum(arr){
    var total = 0;
    arr.forEach(arr => {
        total += arr;
    });
    return total;
}

function arrayDouble (array){
    // let arr = [];
    let i =0;
    array.forEach(element => {
        array[i++] = 2*element;
    });
    return array;

}
const arr = [1,2,3,4,5,6,7,8,9];
const arraySum = arrayOperation(arr, sum);
console.log("sum of an array: ", arraySum);

const doublearray = arrayOperation(arr, arrayDouble);
console.log("double of an array: ", doublearray);





//********common use cases of higher order functions   
// callback functions, function composition, event handling, iterators and generators
//  */