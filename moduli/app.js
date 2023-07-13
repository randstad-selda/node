import { sum } from "./math.js";
import fs from "fs";
import os from "os";
import http from "http";
import validator from "validator";

// fs.appendFileSync("text.txt", "Ciao a tutti!");
// console.log(os.homedir());

// console.log(validator.isEmail("ciao"));

// Creazione web server
const server = http.createServer((request, response) => {
  response.writeHead(200, {
    "Content-Type": "text/html",
  });

  if (request.url === "/user/1") {
    return response.end("<h1>Benvenuto utente con ID 1</h1>");
  }

  return response.end("<h1>Ciao a tutti</h1>");
});

// Attivazione web server
server.listen(3000, "localhost", () => {
  console.log(`Server in ascolto sulla porta 3000`);
});
