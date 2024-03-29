const Upload = require("../controller/upload.js");
const multer = require("multer");
const upload = multer({
  limits: { fieldSize: 1115 * 1024 * 1024 },
});
const express = require("express");
const router = express.Router();
router.post("/", upload.array("files", 5), Upload.upload);
module.exports = router;
