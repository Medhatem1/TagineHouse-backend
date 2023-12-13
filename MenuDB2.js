const mongoose = require("mongoose");

const schema = mongoose.Schema(
    {
        name:"String",
        description:"String" ,
        price:"Number"
       },
  {
    timestamps: true,
  }
);

const main = mongoose.model("main", schema);
module.exports = main;