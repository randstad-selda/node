import express from "express";

const router = express.Router();

router.get("*", (req, res) => {
  res.render("page404");
});

export { router };
