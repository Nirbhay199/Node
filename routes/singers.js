const express = require("express");
const router = express.Router();
const ArticleCtrl = require("/workspaces/Node/controller/singers.js");
router.post("/", ArticleCtrl.addSinger);
router.get("/", ArticleCtrl.getSinger);
module.exports = router;
