const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const loginform = require("./routes/api/loginform");
const cors = require("cors");
const path = require("path");

require("dotenv/config");

const app = express();

// Cors Middleware
app.use(cors());

app.use(bodyparser.json());

//Conncting DB
mongoose.connect(process.env.DB_LOGIN, { useNewUrlParser: true }, () => {
  console.log("Connected Succefully...");
});

app.use("/login-signup", loginform);

if (process.env.NODE_ENV === "production") {
  // Static Folder
  app.use(express.static("login-form/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "login-form", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Running On ", port));
