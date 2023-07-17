const mongoose = require("mongoose");
const EventSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
  location: {
    type: String,
  },
  organiser: {
    type: String,
  },
  registrations: {
    type: Number,
    default: 0,
  },
});

const Action = mongoose.model("action", EventSchema);
module.exports = Action;
