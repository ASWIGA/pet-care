const express = require("express");
const { addPet, getPets, deletePet } = require("../controllers/pet.controller");

const router = express.Router();

router.post("/", addPet);
router.get("/", getPets);
router.delete("/:id", deletePet);

module.exports = router;
