require("dotenv").config();
const { default: mongoose } = require("mongoose");
const express = require("express");
const user = require("./User/user.route.js");
const video_token = require("./video_call/video_call.route.js");
const bodyParser = require("body-parser");
// const cors = require("cors");
const app = express();
mongoose
  .connect(process.env.url)
  .then((value) => {
    console.log("Db Connected");
  })
  .catch((_) => {
    console.log(`Get error${error}`);
  });
// app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/user", user);
app.use("/video_call", video_token);
app.listen(8000, (_) => {
  console.log("connected to sever");
});
