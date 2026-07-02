const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  fullName: String,
  mobile: String,
  email: String,
  projectTitle: String,
  language: String,
  database: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Project", projectSchema);