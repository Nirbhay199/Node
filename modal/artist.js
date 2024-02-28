const mongoose = require("mongoose");
const Song = require("../modal/song.js");
const Schema = mongoose.Schema;
const artistShema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    profile_pic: {
      type: String,
      required: false,
    },
    // music: [
    //   {
    //     type: {
    //       name: { type: String, required: true },
    //       audio_file: { type: String, required: true },
    //     },
    //     required: true,
    //   },
    // ],
  },
  { timestamps: true }
);
module.exports = Artist = mongoose.model("Artist", artistShema);
