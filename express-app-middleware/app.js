import express from "express";
import morgan from "morgan";

import {
  chechAuthentication,
  checkAuthorization,
} from "./middlewares/user.auth.js";

const app = express();

// middlware di terze parti
app.use(morgan("tiny"));

// middlware build-in express
app.use(express.static("public"));

// Aggiungo i middleware di autenticazione e autorizzazione su tutte le rotte che inziano per /user
app.use("/user", chechAuthentication, checkAuthorization);

// rotte private
app.get("/user", (req, res) => {
  res.send("Ecco la risorsa privata");
});

app.get("/user/profile", (req, res) => {
  res.send("Ecco i dati dell'utente");
});

app.listen(3000);
