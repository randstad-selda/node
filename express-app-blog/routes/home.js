import express from "express";

const router = express.Router();

const articles = [
  {
    title: "Primo Articolo",
    content: "Testo articolo 1",
  },
  {
    title: "Secondo Articolo",
    content: "Testo articolo 2",
  },
];

router.get("/", (req, res) => {
  res.render("home", {
    metaTitle: "Blog i sapori della liguria",
    pageTitle: "Home Page",
    pageContent: "Contenuto Pagina",
  });
});

export { router };
