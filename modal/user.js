const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
});
module.exports = User = mongoose.model("User", userSchema);
