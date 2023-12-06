const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    Name: "String",
    email: "String",
    age: "Number",
    message: "String",

  },
  {
    timestamps: true,
  }
);

const reply = mongoose.model("reply", schema);
module.exports = reply;
