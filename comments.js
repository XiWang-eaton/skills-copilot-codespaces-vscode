// Create web server 
// 1. Create a web server
// 2. Define the port number
// 3. Define the routes
// 4. Start the server

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/comments', (req, res) => {
    res.send('Comments will be displayed here');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});