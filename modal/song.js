const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const songScheme = Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  audio_file: {
    type: String,
    required: true,
  },
  singer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Artist",
    required: true,
  },
});
module.exports = Song = mongoose.model("song", songScheme);
