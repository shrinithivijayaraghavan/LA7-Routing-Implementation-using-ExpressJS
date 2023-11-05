const express = require('express'); const app = express();
const port = 3000; // Port to listen on

// Route for the home page app.get('/', (req, res) => {
res.send('Welcome to the home page!');
});

// Route for a specific path app.get('/about', (req, res) => {
res.send('This is the about page.');
});

// Start the server app.listen(port, () => {
console.log(`Server running at http://localhost:${port}`);
});
