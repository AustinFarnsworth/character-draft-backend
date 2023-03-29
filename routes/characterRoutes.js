const express = require("express");
const router = express.Router();
const movieCharacter = require("../models/movieCharacter");

router.get("/character", async (req, res) => {
  try {
    const character = await movieCharacter.find();
    res.json(character);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
