// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middlewares
app.use(express.json());

// CORS Configuration - Allow all origins including Vercel
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (mobile apps, Postman, etc.)
      if (!origin) return callback(null, true);
      
      // Allow all origins - you can restrict this in production
      // For production, set CLIENT_ORIGIN to your Vercel domain
      callback(null, true);
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    exposedHeaders: ['Content-Length', 'X-Foo', 'X-Bar']
  })
);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
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
