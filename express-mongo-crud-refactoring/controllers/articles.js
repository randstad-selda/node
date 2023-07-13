import express from "express";
import { authenticateToken } from "../middlewares/user.auth.js";
import Article from "../models/Article.js";

const articleController = express.Router();
const articleModel = new Article();

articleController.get("/articles", authenticateToken, async (req, res) => {
  const articles = await articleModel.index();
  //   res.render("articles", {
  //     articles: articles,
  //   });
  res.json(articles);
});

articleController.get("/article/:id", async (req, res) => {
  const article = await articleModel.show(req.params.id);
  res.json(article);
});

articleController.post("/articles", async (req, res) => {
  const newArticle = await articleModel.create(req.body);
  res.json(newArticle);
});

export { articleController };
