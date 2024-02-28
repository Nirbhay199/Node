const express = require("express");
const router = express.Router();
const ArticleCtrl = require("/Users/610weblab/Documents/Node/controller/singers.js");
router.post("/", ArticleCtrl.addSinger);
router.get("/", ArticleCtrl.getSinger);
module.exports = router;