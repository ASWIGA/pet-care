const express = require("express");
const {
  requestAdoption,
  getAllAdoptions,
  getUserAdoptions,
  updateStatus
} = require("../controllers/adoption.controller");

const router = express.Router();

// Create adoption request
router.post("/", requestAdoption);

// Get all adoptions (Admin)
router.get("/", getAllAdoptions);

// Get user-specific adoptions by email
router.get("/user/:email", getUserAdoptions);

// Update status (Admin)
router.put("/:id", updateStatus);

module.exports = router;
