import express from "express";
// routes
import { router as home } from "./routes/home.js";
import { router as contacts } from "./routes/contacts.js";
import { router as page404 } from "./routes/page404.js";

const app = express();

// abilito il template engine ejs
app.set("view engine", "ejs");

// middleware file statici (css, img ecc...)
app.use(express.static("public"));

// istruisco express ad utilizzare le rotte
app.use(home, contacts, page404);
// app.use(page404);

app.listen(3000);
