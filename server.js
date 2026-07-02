const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Review = require("./models/Review");
const Project = require("./models/Project");
const axios = require("axios");
require("dotenv").config();


const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.log("❌ MongoDB Error:", err);
  });

app.get("/", (req, res) => {
  res.send("Backend Running");
});
app.post("/api/reviews", async (req, res) => {
  try {
    const review = new Review(req.body);

    await review.save();

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
app.post("/api/register-project", async (req, res) => {
  try {
    // Save to MongoDB
    const project = new Project(req.body);
    await project.save();

    // Send data to n8n
    await axios.post(
      "https://abhishekokali100.app.n8n.cloud/webhook-test/register-project",
      req.body
    );

    res.status(201).json({
      success: true,
      message: "Project Registered Successfully",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});
app.get("/api/reviews", async (req, res) => {
  try {
    const reviews = await Review.find().sort({
      createdAt: -1,
    });

    res.json(reviews);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});