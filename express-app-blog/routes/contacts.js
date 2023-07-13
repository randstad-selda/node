import express from "express";

const router = express.Router();

router.get("/contacts", (req, res) => {
  res.render("contacts", {
    metaTitle: "Contatti",
    pageTitle: "Contatti",
    pageContent: "Chiamaci al 33333333",
  });
});

export { router };
