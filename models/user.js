const mongoose = require("mongoose");

const users = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", users);
