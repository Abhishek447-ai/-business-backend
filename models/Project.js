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
    Description: {
      type: String,
      required: true,
    },
    // NEW FIELDS
    status: {
      type: String,
      enum: ["pending", "processing", "completed", "failed"],
      default: "pending",
    },

    generatedProject: {
      type: Object,
      default: null,
    },

    completedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", projectSchema);