const http = require('http') ; 

const myServer = http.createServer((require , response) =>{
  console.log(require.url , require.method , require.headers) ; // Log the request URL, method, and headers
  console.log("Server is LIve and Working .. waiting for requests .. ") ;


  // lets make the request different for different urls //

  if(require.url === '/'){
    response.setHeader('Content-Type', 'text/html'); // Set the response header to plain text
  response.write('<html>') ; 
  response.write('<body><h1>Welcome to home </h1></body>') ;

  response.write('</html>') ;
  return response.end(); 
  }
  else if(require === '/pro'){
    response.setHeader('Content-Type', 'text/html'); // Set the response header to plain text
    response.write('<html>') ; 
    response.write('<body><h1>Welcome to Products</h1></body>') ;
  
    response.write('</html>') ;
    return response.end(); 
  }
  
  else{
    response.setHeader('Content-Type', 'text/html'); // Set the response header to plain text
    response.write('<html>') ; 
    response.write('<body><h1>My First Response</h1></body>') ;
  
    response.write('</html>') ;
    end(); 
  }
  // this is the only response user will get on any request made to the server //
  
})

const port = 2002 ; 

myServer.listen(port , () =>{
  console.log("Server is running on http://localhost:" + port) ;
})