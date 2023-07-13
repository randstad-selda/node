import express from "express";
import jwt from "jsonwebtoken";

import MongoConnect from "./mongo-connection.js";
import { articleController } from "./controllers/articles.js";

function generateAccessToken(data) {
  return jwt.sign(data, process.env.TOKEN_SECRET, { expiresIn: "20s" });
}

const app = express();
app.use(express.json());
app.set("view engine", "ejs");

app.get("/login", (req, res) => {
  const user = {
    name: "Samuele",
    isLoggedIn: true,
  };
  const token = generateAccessToken({ user });

  res.json({ accessToken: token });
});

const mongoConnect = new MongoConnect();

app.use(articleController);

mongoConnect.connect();
mongoConnect.on("dbConnection", () => {
  app.listen(3000, () => console.log("server running..."));
});
