const express = require("express");
const router = express.Router();
const ArticleCtrl = require("../controller/singers.js");
router.post("/", ArticleCtrl.addSinger);
router.get("/", ArticleCtrl.getSinger);
router.get("/songs", ArticleCtrl.getSongs);
router.delete("/", ArticleCtrl.deleteArtistBYID);
module.exports = router;
