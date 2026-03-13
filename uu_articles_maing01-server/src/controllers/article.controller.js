const Article = require("../models/article.model");

async function listArticles(_req, res, next) {
  try {
    const articles = await Article.find().sort({ createdAt: -1 });
    res.json(articles);
  } catch (error) {
    next(error);
  }
}

async function createArticle(req, res, next) {
  try {
    const article = await Article.create(req.body);
    res.status(201).json(article);
  } catch (error) {
    next(error);
  }
}

module.exports = { listArticles, createArticle };
