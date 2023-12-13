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

const desserts = mongoose.model("desserts", schema);
module.exports = desserts;