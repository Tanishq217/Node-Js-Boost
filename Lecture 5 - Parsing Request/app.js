const http = require('http') ; 

const requestHandler = require('./user') ; 

const server = http.createServer(requestHandler) ;

const port = 3009 ; 

server.listen(port , () =>{
  console.log(`Server is Running on address http://localhost:${port}`) ;
})