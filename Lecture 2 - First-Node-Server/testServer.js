const http = require('http') ; 


const myServer = http.createServer((req ,res)=>{
  console.log("This is MY server" , req) ;
  process.exit() ; 

  // THis is end the process after logging the request 
})

const port  = 4000 ; 

myServer.listen(port , () =>{
  console.log("Listining your request in port > http://localhost:" + port) ;
})