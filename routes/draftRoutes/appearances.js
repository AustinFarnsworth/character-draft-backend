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
  try {
    const appearances = await Appearance.findById(req.params.id);
    res.json(appearances);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Create Character Appearance

router.post("/", async (req, res) => {
  try {
    const appearances = await Appearance.create(req.body);
    res.json({message: "Appearance Created!"});
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// Update Character Appearance

router.put("/:id", async (req, res) => {
  try {
    const appearance = await Appearance.findByIdAndUpdate(
      {_id: req.params.appearanceId},
      {$set: req.body},
      {new: true}
    );
    res.json({message: "Character appearance updated!"});
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// Delete Character Appearance

router.delete("/:id", async (req, res) => {
  try {
    const appearance = await Appearance.findByIdAndDelete({
      _id: req.params.appearanceId,
    });

    res.json({message: "Appearance Deleted!"});
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
