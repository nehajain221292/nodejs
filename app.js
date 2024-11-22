// Import the express module
const express = require('express');
const app = express();

// Define a route for the home page
app.get('/', (req, res) => {
  res.send('Hello, World! This is my first Node.js web app.');
});

// Define a route for the about page
app.get('/about', (req, res) => {
  res.send('This is a simple Node.js web app powered by Express!');
});

// Define the port to listen on
const port = 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
