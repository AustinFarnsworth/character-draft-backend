const express = require("express");
const router = express.Router();
const Appearance = require("../../models/appearances");

// Get All Character Appearance

router.get("/", async (req, res) => {
  // get all goes here

  try {
    const appearances = await Appearance.find();
    res.json(appearances);
  } catch (error) {
    res.status(500).send(error);
  }
});
// Get One Character Appearance

router.get("/:id", async (req, res) => {
  res.send(req.params.id);
});

// Create Character Appearance

router.post("/appearances/:");

// Update Character Appearance

// Delete Character Appearance

module.exports = router;
