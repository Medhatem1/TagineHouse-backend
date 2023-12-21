const mongoose = require("mongoose");

const schema = new mongoose.Schema(
    {
        email:"String",
        password:"String",
        role:{
            type:"String",
            default:"user"
        }
       },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", schema);
module.exports = User;