const express = require("express");
const router = express.Router();

const User = require("../models/user");

router.get("/", async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (e) {
    res.send(e);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.post("/", async (req, res) => {
  const user = new User({
    name: req.body.name,
    age: req.body.age,
  });

  try {
    const x = await user.save();
    res.json(x);
  } catch (e) {
    res.send("Error");
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user.name = req.body.name;
    user.age = req.body.age;
    const x = await user.save();
    res.json(x);
  } catch (err) {
    res.send("Error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    await user.deleteOne();
    res.json("Deleted");
  } catch (err) {
    console.log("Error");
  }
});

module.exports = router;
