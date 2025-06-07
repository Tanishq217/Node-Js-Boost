const fs = require('fs');

const userRequestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Enter Your Details:</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
    res.write('<label for="male">Male</label>')
    res.write('<input type="radio" id="male" name="gender" value="male" />')
    res.write('<label for="female">Female</label>')
    res.write('<input type="radio" id="female" name="gender" value="female" />')
    res.write('<br><input type="submit" value="Submit">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();

  } else if (req.url.toLowerCase() === "/submit-details" &&
        req.method == "POST") {



      
    const body = []; // This is like a buffer to hold chunks of data


    req.on('data', chunk => {// on meaning to listen > when new data arrives
      // chunk is a Buffer object containing the binary data

      console.log(chunk); // this will print random binary data

      body.push(chunk); // pushing the chunk of data into the body array , like pushing the chunk to buffer
    });

      // now we need to wait for the 'end' event to know when all data has been received
    // 'end' event is emitted when there is no more data to be received
    
    req.on('end', () => { // so we know all chunks have been received

      const fullBody = Buffer.concat(body).toString(); // combine all chunks into a single buffer and convert to string

      console.log(fullBody);


      // Parse the body string into an object
      // urlsearchParams is a built-in method to parse query strings
      const params = new URLSearchParams(fullBody);
      // const bodyObject = {};
      // for (const [key, val] of params.entries()) {
      //   bodyObject[key] = val;
      // }
      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);
      fs.writeFileSync('user.txt', JSON.stringify(bodyObject));
    });




    // After processing the data, redirect to the home page
    res.statusCode = 302;
    res.setHeader('Location', '/');
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Like / Share / Subscribe</h1></body>');
  res.write('</html>');
  res.end();
};

module.exports = userRequestHandler;