const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    Name: "String",
    date: "String",
    time: "String",
    person: "String",
    msg: "String",
    num: "Number",
    email: "String"
  },
  {
    timestamps: true,
  }
);

const book = mongoose.model("book", schema);
module.exports = book;
