const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("AI Chat Backend Running 🚀");
});

module.exports = app;