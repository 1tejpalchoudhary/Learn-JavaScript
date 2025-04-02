//axios is a popular javascript library which is using http requests in server and browser. it simplifies the process of sending http request and handling responses. it is widely used due to its flexiability and easy to use API and ability to handles the promises.

//we have to import the axios libarary
import axios from "axios";


// baisc get request
axios.get('https://url.com/posts/1')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

  //post request axios.post()
axios.post('http://url.com', {
    title: 'hello dj',
    body:'this is data in body',
    userId: 1
  })
    .then(response =>{
    console.log(response.data);
  })
    .catch(error =>{
    console.log("error is : ", error);
  })