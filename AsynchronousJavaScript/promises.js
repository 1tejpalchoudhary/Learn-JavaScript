// basically promises are the state of an asynchronous operation which stores the result in 3 ways like state pending, fulfilled, rejected.

const { response } = require("express");



const myPromise = new Promise((resovle, reject)=>{
    setTimeout(()=>{
        const success = false;
        if(success){
            resovle("Success");
        }else{
            reject("rejected");
        }
    }, 2000)
});

myPromise
    .then((result) =>{
    console.log(result);
    })
    .catch((error) =>
    {
        console.log(error);
    });


// here we are going to discuss some real life examples based on the promise.
// Scenario: Retrieve user data from a REST API.
// Problem: Network requests are asynchronous and can fail (e.g., slow connection, server errors).
// Solution: Use fetch (which returns a Promise) to handle success/error cases cleanly.

fetch('1')
    .then(response =>{
        if(!response.ok) throw new error('HTTP Error');
        return response.json();
    })
    .then(userData =>{
        console.log('User: ', userData);
        renderUserProfile(userData);
    })
    .catch(error => {
        console.error('Fetch failed:', error);
        showErrorMessage('Failed to load user data.');
      });


// Scenario: Fetch a user’s posts after fetching their profile.
// Problem: Second API call depends on data from the first.
// Solution: Chain Promises to sequence async operations.

// function fetch(id){
//     return 'dj';
// }


 function fetchUser(id){
    const response =  fetch(id)
    .then(response => response.json());
}
 function fetchPosts(id){
    const response =  fetch(id)
    .then(response =>  response.json());
}

fetchUser(1)
    .then(user =>{
        console.log('User :');
        return fetchPosts(id);
    }).then(post =>{
        console.log('Posts : ', post);
        renderPosts(post);
    }).catch(error =>{
        console.log('request failed', error);
    });