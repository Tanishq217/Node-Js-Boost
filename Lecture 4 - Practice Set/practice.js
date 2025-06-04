const http = require ('http') ; 

const server = http.createServer((req , res) =>{
  console.log(req.url , req.method)

  if(req.url === '/home'){
    res.write('<h1>Welcome to Myntra</h1>')
  }
  else if(req.url === '/men'){
    res.write('<h1>Men\'s Section</h1>')
  }
  else if(req.url === '/kids'){
    res.write('<h1>Kids\'s Section</h1>')
  }
  else if(req.url === '/women'){
    res.write('<h1>Women\'s Section</h1>')
  }
  else if(req.url === '/cart'){
    res.write('<h1>Cart Section</h1>')
  }
  else{
    res.write('<h1>404 Not Found</h1>')
  }         

  res.write(
    `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Myntra</title>
</head>
<body>

  <head>
    <nav>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/men">Men</a></li>
        <li><a href="/women">Women</a></li>
        <li><a href="/kids">Kids</a></li>
        <li><a href="/cart">Cart</a></li>
      </ul>
    </nav>
  </head>
  
</body>
</html>
    `
  )
  res.end() ; 
})


server.listen(7007 , () =>{
  console.log("Server is Running on port http://localhost:7007");
})