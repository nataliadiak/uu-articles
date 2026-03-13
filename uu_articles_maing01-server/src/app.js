const express = require("express");
const cors = require("cors");
const articleRoutes = require("./routes/article.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/articles", articleRoutes);

app.use((err, _req, res, _next) => {
  const status = err.name === "ValidationError" ? 400 : 500;
  res.status(status).json({ message: err.message || "Unexpected server error" });
});

module.exports = app;
