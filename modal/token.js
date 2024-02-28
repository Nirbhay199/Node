const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const tokenSchema = Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
});
module.exports = Token = mongoose.model("Token", tokenSchema);
