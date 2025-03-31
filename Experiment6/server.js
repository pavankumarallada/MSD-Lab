import { createServer } from 'http';

// Create the server using an arrow function
const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write("Hello World! I have created my first server with ES6!");
    res.end();
});

const PORT = 3000;

// Listen on the specified port
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Error handling: add an event listener for unhandled errors
server.on('error', (err) => {
  console.error('An error occurred:', err);
});


