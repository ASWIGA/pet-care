const Vet = require("../models/Vet");

// Book new vet appointment
exports.bookVet = async (req, res) => {
  try {
    const vetAppointment = new Vet(req.body);
    await vetAppointment.save();
    res.status(201).json({ message: "Vet appointment booked", vetAppointment });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all appointments (for admin)
exports.getAllAppointments = async (_req, res) => {
  try {
    const appointments = await Vet.find().sort({ createdAt: -1 });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Get vet appointments for a specific user
exports.getUserAppointments = async (req, res) => {
  try {
    const { email } = req.params;
    const appointments = await Vet.find({ email }).sort({ createdAt: -1 });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Update appointment status (admin accept/reject)
exports.updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!["Pending", "Accepted", "Rejected"].includes(status)) {
      return res.status(400).json({ error: "Invalid status" });
    }

    const updated = await Vet.findByIdAndUpdate(id, { status }, { new: true });

    if (!updated) {
      return res.status(404).json({ error: "Appointment not found" });
    }

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
