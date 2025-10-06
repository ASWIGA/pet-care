const express = require("express");
const router = express.Router();
const Grooming = require("../models/Grooming");

// ✅ Create booking
router.post("/", async (req, res) => {
  try {
    const booking = await Grooming.create(req.body);
    res.json({ message: "Booking created", booking });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create booking" });
  }
});

// ✅ Get all bookings (Admin)
router.get("/", async (_req, res) => {
  try {
    const bookings = await Grooming.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
});

// ✅ Get bookings for a specific user
router.get("/user/:email", async (req, res) => {
  try {
    const bookings = await Grooming.find({ email: req.params.email }).sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch user bookings" });
  }
});

// ✅ Update booking status (Admin Accept/Reject)
router.put("/:id", async (req, res) => {
  try {
    const booking = await Grooming.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(booking);
  } catch (err) {
    res.status(500).json({ error: "Failed to update booking" });
  }
});

// routes/grooming.routes.js
router.get("/user/:email", async (req, res) => {
  try {
    const bookings = await GroomingBooking.find({ email: req.params.email });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});


module.exports = router;
