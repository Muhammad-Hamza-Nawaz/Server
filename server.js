const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
    res.statusCode = 200; // HTTP status code
    res.setHeader('Content-Type', 'text/plain'); // Content-Type header
    res.end('Hello, World\n'); // Response content
});


const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
