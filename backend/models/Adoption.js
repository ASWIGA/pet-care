const mongoose = require("mongoose");

const adoptionSchema = new mongoose.Schema({
  pet: { type: mongoose.Schema.Types.ObjectId, ref: "Pet", required: true },
  adopterName: { type: String, required: true },
  adopterEmail: { type: String, required: true },
  adopterPhone: { type: String, required: true },
  adopterAddress: { type: String, required: true },
  reason: { type: String, required: true },   // why adopt
  status: { type: String, enum: ["Pending", "Approved", "Rejected"], default: "Pending" }
}, { timestamps: true });

module.exports = mongoose.model("Adoption", adoptionSchema);
