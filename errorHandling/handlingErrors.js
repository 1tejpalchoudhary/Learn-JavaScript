function add(x,y){
    return x+y;
}

function divide(x,y){
    if(y === 0 ){
        throw new Error("Division is not possible")
    }
    return x/y;
}


function mul(x,y){
    return x*y;
}



try{
   let divide1 =  divide(2,0);
   console.log(divide1) 
}catch(err){
    console.log(err.message);
}

let multiply = mul(9,3);
console.log(multiply)


let add1 =  add(2,4);
console.log(add1)




//Custom errors
class MyCustomError extends Error {
    constructor(message) {
      super(message);
      this.name = "MyCustomError";
    }
  }
  
  try {
    throw new MyCustomError("This is a custom error.");
  } catch (error) {
    console.error("An error occurred: " + error.message);
  }