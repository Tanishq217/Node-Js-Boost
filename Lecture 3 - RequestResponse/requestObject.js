const http = require('http') ; 

const myServer = http.createServer((req , res) =>{
  console.log(req.url, req.method, req.headers); 
})

const port = 6001 ; 
myServer.listen(port , ()=>{
  console.log("Listening your request in port > http://localhost:" + port) ;
})


// if we change the url using > / and put any section , it will update the // url in the console log.

// AFTER req.url > / , we can add any section and it will be logged in the console and page will lode in that section .. // 



// Now we have request object , but we need to send response back to the client //
// how to send response back to the client ? // 