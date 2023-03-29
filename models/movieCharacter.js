const mongoose = require("mongoose");

const movieCharacterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const movieCharacter = mongoose.model("MovieCharacter", movieCharacterSchema);

movieCharacter.create({
  name: "Captain America",
});

module.exports = movieCharacter;
