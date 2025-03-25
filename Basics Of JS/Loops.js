/* there are several types of loops are available in javascript 
for
while
do while
forEach ====. this loop is used in array iteration
for in => this loop isused for object iteration iteration
for of => this loop is used in strings, array, linked list, maps etc.
*/

//======> for loop


// console.log('print this 0 to 10 times');
// for(let i = 0; i <= 10; i++){
//     console.log(i);
// }

// ==> while()

// console.log('print this 0 to 10 times');
// let i = 0;
// while(i <=10){
//     console.log(i);
//     i++;

// }

// ====>  do-while in this loop, loop will run atleast once even if the condition is false

// console.log('print this 0 to 10 times');

// let i = 0;
// do{
//     console.log(i);
//     i++;
// }while(i <=10)


// ======>       foreach loop

// let arr = [1,2,3,4,5,6,7];
// arr.forEach(e => {
//     console.log(e);
// });


//======>     for in loop

// let person = {
//     name : "Tejpal",
//     age : 26,
//     graduction: "B.Tech"
// };

// for (const x in person) {
//     console.log(  person[x]);
// }


// =====>    for of loop

// this loop is used in arrays , string,  linked list, maps etc.


let x = "I am simple string";

for (const element of x) {
    console.log(element);  // this will print each and every charector of a string
}