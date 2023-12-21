const mongoose = require("mongoose");

const schema = mongoose.Schema(
    {
        email:"string"
       },
  {
    timestamps: true,
  }
);

const email = mongoose.model("email", schema);
module.exports = email;