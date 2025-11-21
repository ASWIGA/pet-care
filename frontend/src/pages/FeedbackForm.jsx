import React, { useState } from "react";
import axios from "axios";
import "./FeedbackForm.css"; // import the CSS file
import API from "../api";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Good",
    rating: 5,
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API}/api/feedback`, formData);
      alert("✅ Feedback submitted successfully!");
      setFormData({ name: "", email: "", service: "Good", rating: 5, message: "" });
    } catch (error) {
      alert("❌ Error submitting feedback");
    }
  };

  return (
    <div className="feedback-container">
      <div className="feedback-box">
        <h2 className="feedback-title">✨ Share Your Feedback</h2>
        <form onSubmit={handleSubmit} className="feedback-form">
          {/* Name */}
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          {/* Email */}
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* Service */}
          <label>Service Quality</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
          >
            <option value="Good">Good</option>
            <option value="Average">Average</option>
            <option value="Bad">Bad</option>
          </select>

          {/* Rating */}
          <label>Rating (1 - 5)</label>
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            value={formData.rating}
            onChange={handleChange}
            required
          />

          {/* Message */}
          <label>Your Feedback</label>
          <textarea
            name="message"
            placeholder="Write your feedback here..."
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          />

          {/* Submit Button */}
          <button type="submit" className="submit-btn">
            🚀 Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
