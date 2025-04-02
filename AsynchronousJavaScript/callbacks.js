//callbacks are a fundamental concept of js where user passed a function as an argument to another function  and are letter executed.

function fetchData(url,callbacks){
    setTimeout(function(){
        const data = "fetched succesfully " + url;
       
        callbacks(data);
    }, 100);
}

function processFetchedData(data){
    console.log(" Data recived", data);
}

fetchData("www.rightuprealty.com", processFetchedData);




asyncFunction1(function(result1) {
  asyncFunction2(result1, function(result2) {
    asyncFunction3(result2, function(result3) {
      // ... and so on , this process call the callback hell where we are calling nested function 
    });
  });
});

