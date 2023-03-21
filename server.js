const express = require("express");

const db = require("./config/connection");

const app = express();

const PORT = 3004;

app.get("/", (req, res) => {
  res.json("Hello, World");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
