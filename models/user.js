const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({

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
  }

},{
  timestamps: true
});

const user = mongoose.model("user", urlSchema);

module.exports = user;


