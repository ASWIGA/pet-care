const express = require("express");
const router = express.Router();
const { createFeedback, getAllFeedbacks } = require("../controllers/feedback.controller");

// POST feedback
router.post("/", createFeedback);

// GET all feedbacks (admin reports)
router.get("/", getAllFeedbacks);

module.exports = router;
