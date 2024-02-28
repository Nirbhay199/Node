const User = require("/Users/610weblab/Documents/Node/controller/user.js");
const express = require("express");
const router = express.Router();
router.post("/", User.createAccount);
module.exports = router;
