// For request and response we will use HTTP module

// const http = require('http'); 

// Lets make a function "Create Server" which takes 2 arguments 

  
// function requestListener (request , response ){
//     // This function will be called whenever a request is made to the server
//     // We will send a response back to the client

//     // WE ARE SERVER // 
//     console.log(request)
// }

// http.createServer(requestListener) ; 

// THIS WAS OLD WAY OF WRITING THIS SERVER , LETS WRITE IT IN MORE // MODERN WAY

const http = require('http') ; 

const myServer = http.createServer((request , response) => {
  console.log(request)
})

// This will create a server that listens for requests and logs the request object to the console.
// BUt he has to start listing on a port to receive requests.

// myServer.listen(3000) // server will listen now 


// writing this is a good way // 

const PORT = 3000  ; 
myServer.listen(PORT , () =>{
  console.log('Server started at port address http://localhost' + PORT) ; 
})



