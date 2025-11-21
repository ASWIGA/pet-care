import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./groomingForm.css"; // Import custom CSS
import API from "../api";

export default function GroomingForm() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedService = params.get("service") || "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    location: "",
    petType: "",
    date: "",
    time: "",
    service: selectedService,
    paymentMode: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API}/api/grooming`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        alert("🎉 Booking Submitted! Status: Pending");
        setForm({
          name: "",
          email: "",
          mobile: "",
          location: "",
          petType: "",
          date: "",
          time: "",
          service: "",
          paymentMode: "",
        });
      } else {
        alert("⚠️ Failed to submit");
      }
    } catch (err) {
      alert("Network error: " + err.message);
    }
  };

  return (
    <div className="grooming-container">
      <h1>🐶 Book Grooming Appointment</h1>
      <form onSubmit={handleSubmit} className="grooming-form">
        {["name", "email", "mobile", "location", "petType"].map((f) => (
          <div className="form-group" key={f}>
            <label>{f.charAt(0).toUpperCase() + f.slice(1)}</label>
            <input
              type={f === "email" ? "email" : "text"}
              name={f}
              value={form[f]}
              onChange={handleChange}
              placeholder={`Enter your ${f}`}
              required
            />
          </div>
        ))}

        <div className="form-group">
          <label>Date</label>
          <input type="date" name="date" value={form.date} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Time Slot</label>
          <select name="time" value={form.time} onChange={handleChange} required>
            <option value="">--Select Time--</option>
            <option>9:00 AM - 9:30 AM</option>
            <option>9:30 AM - 10:00 AM</option>
            <option>10:00 AM - 10:30 AM</option>
            <option>10:30 AM - 11:00 AM</option>
            <option>11:00 AM - 11:30 AM</option>
            <option>11:30 AM - 12:00 PM</option>
          </select>
        </div>

        <div className="form-group">
          <label>Service</label>
          <select name="service" value={form.service} onChange={handleChange} required>
            <option value="">--Select Service--</option>
            <option>Bath & Blow Dry</option>
            <option>Nail Trimming</option>
            <option>Hair Styling</option>
            <option>Ear Cleaning</option>
          </select>
        </div>

        <div className="form-group">
          <label>Payment Mode</label>
          <select name="paymentMode" value={form.paymentMode} onChange={handleChange} required>
            <option value="">--Select Payment--</option>
            <option>Cash</option>
            <option>UPI</option>
            <option>Card</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">
          🛁 Book Now
        </button>
      </form>
    </div>
  );
}
