const express = require("express");
const router = express.Router();
const movieCharacter = require("../../models/movieCharacter");

router.get("/", async (req, res) => {
  try {
    const character = await movieCharacter.find();
    res.json(character);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const character = await movieCharacter.findById(req.params.id);
    res.json(character);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
