const mongoose = require("mongoose");

const movieCharacterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  appearances: {
    movie: {
      type: String,
    },
    reference: {
      movie: {
        type: String,
      },
    },
  },
});

const movieCharacter = mongoose.model("MovieCharacter", movieCharacterSchema);

// movieCharacter.create({
//   name: "Captain America",
//   appearances: [
//     {movie: "Captain America Winter Soldier"},
//     {movie: "Civil War"},
//   ],
// });

module.exports = movieCharacter;
