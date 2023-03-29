const express = require("express");
const cors = require("cors");
const db = require("./config/connection");

// Router for character appearances
const appearanceRouter = require("./routes/appearances");
const characterRouter = require("./routes/characterRoutes");
const app = express();

app.use(cors());

app.use(express.json());
const PORT = 3004;

db.once("open", () => console.log("Database Connected"));

app.get("/", (req, res) => {
  res.json("Hello, World");
});

// Routes
app.use("/appearances", appearanceRouter);
app.use("/character", characterRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
