// function currying is a process where we converting a function that takes multiple functions as a arguments into a sequence of a functions, each accepting a single arguments.


//suppose we want to find a sum of function arguments but we will use function currying
function sum(a){
      return (b)=>{
       return  (c)=>{
         return   (d)=>{
                return a+b+c+d;
            }
        }
    }
}
console.log("sum of a", sum(1)(2)(3)(4));