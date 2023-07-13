import express from "express";

// creo app in express
const app = express();

app.enable("case sensitive routing");
app.set("x-powered-by", false);

// mappo la rotta home page del nostro sito
app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

// rotte dinamiche /user/1, /user/2, user/3
app.get("/user/:id", (req, res) => {
  res.send(`<h1>Pagina utente ${req.params.id}</h1>`);
});

// rotte dinamiche
app.get("/blog/:year/:month", (req, res) => {
  console.log(req.query.order);
  res.send(`<h1>Anno ${req.params.year} Mese ${req.params.month}</h1>`);
});

app.post("/", (req, res) => {
  res.send("<h1>Richiesta con metodo in post</h1>");
});

app.delete("/", (req, res) => {
  res.send("<h1>Richiesta con metodo delete</h1>");
});

// mappo la rotta home page del nostro sito
app.all("/contatti", (req, res) => {
  res.send(`<h1>Contatti ${req.method}</h1>`);
});

// rotta 404
app.get("*", (req, res) => {
  res.status(404).send("<h1>Pagina non trovata</h1>");
});

// app.set("nameApp", "Introduzione Express.js");
// console.log(app.get("nameApp"));

// runnare il web server sulla 3000
app.listen(3000);
