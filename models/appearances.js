const mongoose = require("mongoose");

const appearanceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  movie: {
    type: String,
    required: true,
  },
  numberOfAppearances: {
    type: String,
    required: true,
  },
});

const Appearance = mongoose.model("Appearance", appearanceSchema);

module.exports = Appearance;
