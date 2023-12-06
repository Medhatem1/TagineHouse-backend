const mongoose = require("mongoose");
const connectionParams = {
  useUnifiedTopology: true
};
const uri = `mongodb+srv://hatim:hatim@cluster0.s1mljbs.mongodb.net/?retryWrites=true&w=majority`

// Connect to MongoDB
const connexion = mongoose
  .connect(uri, connectionParams)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

module.exports = connexion;