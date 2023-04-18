const express = require("express");
const router = express.Router();
const movieCharacter = require("../../models/movieCharacter");

router.get("/", async (req, res) => {
  try {
    const character = await movieCharacter.find();
    res.send(character);
    // res.json(
    //   {
    //     NumberOfCharacters: character.length,
    //   },
    //   {character}
    // );
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

// create character
router.post("/", async (req, res) => {
  try {
    const character = await movieCharacter.create(req.body);
    res.json({message: "Character Created!"});
  } catch (error) {
    res.status(404).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const character = await movieCharacter.findByIdAndUpdate(
      {_id: req.params.characterId},
      {$set: req.body},
      {new: true}
    );

    res.json(character);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// Delete Character
router.delete("/:id", async (req, res) => {
  try {
    const character = await movieCharacter.findOneAndDelete({
      _id: req.params.characterId,
    });

    res.json({message: "Character Deleted!"});
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
