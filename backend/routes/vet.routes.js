const express = require("express");
const router = express.Router();
const vetCtrl = require("../controllers/vet.controller");

// user
router.post("/", vetCtrl.bookVet);

// admin
router.get("/", vetCtrl.getAllAppointments);
router.put("/:id", vetCtrl.updateStatus);
// Get vet appointments for a user
router.get("/user/:email", vetCtrl.getUserAppointments);


module.exports = router;
