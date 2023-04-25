const mongoose = require("mongoose");

const appearanceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  movie: {
    type: String,
    required: true,
  },
  numberOfAppearances: {
    type: Number,
    required: true,
  },
});

const Appearance = mongoose.model("Appearance", appearanceSchema);

// Appearance.create({
//   name: "Iron Man",
//   movie: "Ant Man",
//   numberOfAppearances: "0",
// });

module.exports = Appearance;
