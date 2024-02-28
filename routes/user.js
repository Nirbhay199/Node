const User = require("/workspaces/Node/controller/user.js");
const express = require("express");
const router = express.Router();
router.post("/", User.createAccount);
module.exports = router;
