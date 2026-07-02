const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
   
    projectTitle: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    database: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", projectSchema);