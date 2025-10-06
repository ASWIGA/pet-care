const Pet = require("../models/Pet");

exports.addPet = async (req, res) => {
  try {
    const pet = new Pet(req.body);
    await pet.save();
    res.json(pet);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPets = async (_req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deletePet = async (req, res) => {
  try {
    await Pet.findByIdAndDelete(req.params.id);
    res.json({ message: "Pet deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
