const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <head>
          <title>User Form</title>
        </head>
        <body>
          <h1>Enter your Details</h1>
          <form action="/afterSubmittingForm" method="POST">
            <input type="text" name="username" placeholder="Enter your name" required /><br><br>
            
            <label for="male">Male</label>
            <input id="male" type="radio" name="gender" value="male" />

            <label for="female">Female</label>
            <input id="female" type="radio" name="gender" value="female" /><br><br>

            <button type="submit">Submit</button>
          </form>
        </body>
      </html>
    `);
    return res.end();
  }

  else if (req.url === '/afterSubmittingForm') {
    // Send a 200 status and HTML content
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
      <html>
        <head>
          <title>Form Submitted</title>
        </head>
        <body>
          <h1>Form Submitted Successfully!</h1>
          <p>Thank you for submitting your details.</p>
        </body>
      </html>
    `);
    return res.end();
  }

  else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write(`
      <html>
        <head>
          <title>404 Not Found</title>
        </head>
        <body>
          <h1>Page Not Found</h1>
          <p>The page you are looking for does not exist.</p>
        </body>
      </html>
    `);
    return res.end();
  }
});

const port = 3000;
server.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});
