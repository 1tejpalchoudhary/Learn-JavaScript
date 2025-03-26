/*This page have all the control flow ways of javascript
like conditional statements(if else, switch), loops, break and continue

Conditional

if we have one constion then we use this 
*/
/*
let x = 10;
if(x > 10){
    console.log("x is greather than 10");
}
else{
    console.log('x is less than 10');
}
*/

// if we have 2 or more condition then we can use else if or switch

/*
let a = 10, b = 20;
if(a > b){
    console.log('a is greather than b');
} else if(a == b){
    console.log('a and b both are equal');
}else{
    console.log('b is greater than a');
}
*/

//switch case is work same as else if 
  
let a = 'Apple', b = 'Banana', c ='cutie';
let x = b;
switch(x){
    case a:{
        console.log(a); 
        break;
    }
    case b:
        console.log(b);
        break;
    default:
        console.log("Does not presnet");
        break;
}
