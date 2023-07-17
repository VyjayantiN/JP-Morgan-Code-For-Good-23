const mongoose = require("mongoose");
const TreeSchema = new mongoose.Schema({
  Name: {
    type: String,
  },
  Age: {
    type: Number,
  },
  Species: {
    type: String,
  },
  Benefits: {
    type: String,
  },
  Latitude: {
    type: String,
  },
  Longitude: {
    type: String,
  },

  imageurl: { type: String },

  name: { type: String },
});

module.exports = mongoose.model("Tree", TreeSchema);
