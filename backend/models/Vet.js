const mongoose = require("mongoose");

const vetSchema = new mongoose.Schema(
  {
    ownerName: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    petType: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    serviceType: { type: String, required: true },
    extraInfo: { type: String },
    paymentMode: { type: String, required: true },
    status: {
      type: String,
      enum: ["Pending", "Accepted", "Rejected"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vet", vetSchema);
