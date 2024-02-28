require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const artist = require("/Users/610weblab/Documents/Node/routes/singers.js");
const upload = require("/Users/610weblab/Documents/Node/routes/upload.js");
const user = require("/Users/610weblab/Documents/Node/routes/user.js");
const app = express();
const cors = require("cors");
const port = 8001;
mongoose
  .connect(process.env.url)
  .then((_) => {
    console.log(`database connected ${_}`);
  })
  .catch((_) => {
    console.log(`Error During Connection ${_}`);
  });
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/upload_multi", upload);

app.use("/musicion", artist);
app.use("/user", user);

app.listen(port, () => {
  console.log(`Application is listening at port ${port}`);
});
