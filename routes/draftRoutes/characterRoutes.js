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

router.put("/:id", async (req, res) => {
  try {
    movieCharacter.findByIdAndUpdate(
      {_id: req.params.id},
      {$addToSet: {name: req.body}},
      {runValidators: true, new: true}
    );
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// router.post("/:id", async (req, res) => {
//   try {
//     res.json({message: "Character updated successfully! "});
//   } catch (error) {
//     res.status(500).json({});
//   }
// });

module.exports = router;
