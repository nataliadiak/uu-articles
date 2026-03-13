const express = require("express");
const { listArticles, createArticle } = require("../controllers/article.controller");

const router = express.Router();

router.get("/", listArticles);
router.post("/", createArticle);

module.exports = router;
