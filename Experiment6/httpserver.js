import { createServer } from "http";
import { authenticateUser } from "./DBModule.js"; 

const server = createServer(async (request, response) => { 
  try {
    const result = authenticateUser("admin", "admin"); 
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(`<html><body><h1>${result}</h1></body></html>`); 
  } catch (error) {
    console.error("Authentication error:", error);
    response.writeHead(500, { "Content-Type": "text/plain" });
    response.end("Internal Server Error");
  }
  console.log("Request received");
});

server.listen(3000);
console.log("Server is running at port 3000");