const Adoption = require("../models/Adoption");

// Create adoption request
exports.requestAdoption = async (req, res) => {
  try {
    const { pet, adopterName, adopterEmail, adopterPhone, adopterAddress, reason } = req.body;

    if (!pet || !adopterName || !adopterEmail || !adopterPhone || !adopterAddress || !reason) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const adoption = new Adoption({ pet, adopterName, adopterEmail, adopterPhone, adopterAddress, reason });
    await adoption.save();
    res.status(201).json(adoption);
  } catch (err) {
    res.status(500).json({ message: "Failed to create adoption request", error: err.message });
  }
};

// Get all adoptions (Admin use)
exports.getAllAdoptions = async (_req, res) => {
  try {
    const adoptions = await Adoption.find().populate("pet");
    res.json(adoptions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get user-specific adoptions by email
exports.getUserAdoptions = async (req, res) => {
  try {
    const { email } = req.params;
    const adoptions = await Adoption.find({ adopterEmail: email }).populate("pet");
    res.json(adoptions);
  } catch (err) {
    console.error("❌ Error fetching user adoptions:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// Update adoption status
exports.updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const adoption = await Adoption.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.json(adoption);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
