const mongoose = require("mongoose");

const schema = mongoose.Schema(
    {
        name:"String",
        description:"String",
        price:"Number",
        type:"String"
       },
  {
    timestamps: true,
  }
);

const menu = mongoose.model("menu", schema);
module.exports = menu;
