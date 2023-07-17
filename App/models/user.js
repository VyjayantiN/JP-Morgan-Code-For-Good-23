const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  Phone: {
    type: String,
  },
  Tagged: {
    type: Number,
    default: 0,
  },
  Events_participated: {
    type: Number,
    default: 0,
  },
  Event_organized: {
    type: Number,
    default: 0,
  },
});
const User = mongoose.model("user", UserSchema);
// User.createIndexes();
module.exports = User;
