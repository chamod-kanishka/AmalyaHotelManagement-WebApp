const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

router.get("/register", (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.post("/register", async (req, res) => {
  //validation
  if (!req.body.username || !req.body.username) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  if (req.body.username.length > 15) {
    return res.status(400).json({ msg: "Name length is 15 characters MAX" });
  }
  if (req.body.username === "Apple" || req.body.username === "Banana"
      || req.body.username === "Carrot" || req.body.username === "General Chat"){
        return res.status(400).json({ msg: "Sorry but that's a reserved word" });
  }
  const user = await User.findOne({ username: req.body.username });
  if (user) {
    return res.status(400).json({ msg: "User already exists" });
  }

  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(req.body.password, salt, function (err, hash) {
      // Store hash in your password DB.
      const newUser = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        cnumber: req.body.cnumber,
        password: hash,
      });
      newUser
        .save()
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json("Error: " + err));
    });
  });
});
router.get("/profile", auth, async (req, res) => {
  const user = await User.findById(req.user._id);
  res.json({
    id: user._id,
    name: user.name,
    username: user.username,
    email: user.email,
    cnumber: user.cnumber,
    date: user.date,
  });
});
router.delete("/profile", auth, (req, res) => {
  User.findByIdAndDelete(req.user._id)
    .then(() => res.json("User deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.delete("/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.get("/login", (req, res) => {
  res.send("GET Login");
});
router.post("/login", async (req, res) => {
  //validation
  if (!req.body.username || !req.body.password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  const user = await User.findOne({ username: req.body.username });
  if (!user) {
    return res.status(400).json({ msg: "User doesnt exist" });
  }

  bcrypt.compare(req.body.password, user.password, function (err, response) {
    if (!response) {
      return res.status(400).send({ msg: "Authentication Error" });
    } else {
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
      res.json({
        token: token,
        user: {
          id: user._id,
          name: user.name,
          username: user.username,
          email: user.email,
          cnumber: user.cnumber,
          date: user.date,
        },
      });
    }
  });
});
router.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("auth-token");
    if (!token) {
      return res.json("false");
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) {
      return res.json("false");
    }

    const user = await User.findById(verified._id);
    if (!user) {
      return res.json("false");
    }

    return res.json(true);
  } catch {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
