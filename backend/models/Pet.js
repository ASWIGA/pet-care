const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true }, // Dog, Cat, etc
  age: { type: String, required: true },  // e.g. "3 months"
  breed: { type: String },
  info: { type: String },
  imageUrl: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("Pet", petSchema);
