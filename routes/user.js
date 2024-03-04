const User = require("../controller/user.js");
const express = require("express");
const router = express.Router();
router.post("/sign_up", User.createAccount);
router.post("/login", User.login);
module.exports = router;
