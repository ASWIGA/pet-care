const mongoose = require("mongoose");

const groomingSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  location: String,
  petType: String,
  date: String,
  time: String,
  service: String,
  paymentMode: String,
  status: { type: String, enum: ["Pending", "Accepted", "Rejected"], default: "Pending" }
}, { timestamps: true });

module.exports = mongoose.model("Grooming", groomingSchema);
