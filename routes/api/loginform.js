const express = require("express");

const Users = require("../../models/users");

const router = express.Router();

const { userValidation, loginValidation } = require("../../validation");

const bcrypt = require("bcryptjs");

const Cookie = require("js-cookie");

const jwt = require("jsonwebtoken");

// Get All USers

router.get("/", async (req, res) => {
  // Normal Way
  //   const AllUsers = Users.find()
  //     .then((items) => res.json(items))
  //     .catch((err) => res.send(err));

  try {
    const AllUsers = await Users.find();
    res.json(AllUsers);
  } catch (err) {
    res.json({ Error: "Not Allowed" });
  }
});

// Get Specific User
// router.get("/:id", async (req, res) => {
//   try {
//     const specuser = await Users.findById(req.params.id);
//     res.json(specuser);
//   } catch (err) {
//     res.status(404).json({ Error: "Can't Find User" });
//   }
// });

// Post User
router.post("/signup", async (req, res) => {
  const { error } = userValidation(req.body);
  if (error) {
    res.status(200).send(error.details[0].message);
  } else {
    //   Resp
    // {
    //     "firstname" : "Ri",
    //     "lastname" : "patil",
    //     "email" : "ri",
    //     "password" : "Ritikpatil"
    // }

    const salt = await bcrypt.genSalt(10);
    const encryptPass = await bcrypt.hash(req.body.password, salt);
    const UserFound = await Users.findOne({ email: req.body.email });
    if (UserFound) {
      res.status(200).send("Email Already Exists");
    } else {
      //creating user
      const newuser = new Users({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: encryptPass,
      });
      try {
        const new_User = await newuser.save();
        res.json("User_Created");
      } catch (err) {
        res.json({ MSG: err });
      }
    }
  }
});

router.post("/login", async (req, res) => {
  //validate
  try {
    const { error } = loginValidation(req.body);
    if (error) {
      res.status(200).send(error.details[0].message);
      window.alert(error.details[0].message);
    } else {
      const user = await Users.findOne({ email: req.body.email });
      if (!user) {
        res.status(200).send("Email Not Exists");
      } else {
        //decrypting pass
        const validUser = await bcrypt.compare(
          req.body.password,
          user.password
        );

        //Logging User
        if (!validUser) res.status(200).send("Password Not Match");
        else {
          res.send("Success");
        }

        //jwt
        // const token = jwt.sign({ _id: user._id }, process.env.JWT_TOKEN);
        // res.header("auth-jwt", token);

        // res.send(token);

        //res.send("Logged In!!!");
      }
    }
  } catch (err) {
    res.send(err);
  }
});

router.post("/token", async (req, res) => {
  try {
    // res.send(req.body.email);
    const user = await Users.findOne({ email: req.body.email });
    const token = jwt.sign({ _id: user._id }, process.env.JWT_TOKEN);
    res.header("Authorization", token);
    res.send(user.firstname);
    res.end();
    // res.send(token);
  } catch (error) {
    res.send(err);
  }
});

module.exports = router;
