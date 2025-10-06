// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_ORIGIN, credentials: true }));

// connect
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=>console.log("✅ MongoDB connected"))
  .catch((err)=>console.error("❌ MongoDB error:", err));

// routes
app.get("/", (_req, res) => res.send("Vedhas PetCare API 🚀"));

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

// start
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`🚀 Server running on ${PORT}`));
