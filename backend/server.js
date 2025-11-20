// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN, // Frontend URL (Render)
    credentials: true,
  })
);

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Default Route
app.get("/", (_req, res) => {
  res.send("Vedhas PetCare API 🚀");
});

// Routes
const userRoutes = require("./routes/user.routes");
app.use("/api/users", userRoutes);

const groomingRoutes = require("./routes/grooming.routes");
app.use("/api/grooming", groomingRoutes);

const feedbackRoutes = require("./routes/feedback.routes");
app.use("/api/feedback", feedbackRoutes);

const vetRoutes = require("./routes/vet.routes");
app.use("/api/vet", vetRoutes);

app.use("/api/pets", require("./routes/pet.routes"));
app.use("/api/adoptions", require("./routes/adoption.routes"));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
