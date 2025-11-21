import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./vetForm.css";
import API from "../api";

export default function VetForm() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedService = params.get("service") || "";

  const [form, setForm] = useState({
    ownerName: "",
    email: "",
    mobile: "",
    petType: "",
    date: "",
    time: "",
    serviceType: selectedService,
    extraInfo: "",
    paymentMode: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API}/api/vet`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        alert("🎉 Vet Appointment Submitted! Status: Pending");
        setForm({
          ownerName: "",
          email: "",
          mobile: "",
          petType: "",
          date: "",
          time: "",
          serviceType: "",
          extraInfo: "",
          paymentMode: "",
        });
      } else {
        alert("⚠️ Failed to submit appointment");
      }
    } catch (err) {
      alert("Network error: " + err.message);
    }
  };

  return (
    <div className="vet-form-container">
      <h1>🩺 Book Veterinary Appointment</h1>
      <form onSubmit={handleSubmit} className="vet-form">
        {/* Basic Info */}
        <div className="form-group">
          <label>Owner Name</label>
          <input
            type="text"
            name="ownerName"
            value={form.ownerName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Mobile</label>
          <input
            type="text"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Pet Type</label>
          <input
            type="text"
            name="petType"
            value={form.petType}
            onChange={handleChange}
            required
          />
        </div>

        {/* Date & Time */}
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />
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
          </select>
        </div>

        {/* Service Selection */}
        <div className="form-group">
          <label>Service</label>
          <select
            name="serviceType"
            value={form.serviceType}
            onChange={handleChange}
            required
          >
            <option value="">--Select Service--</option>
            <option>Routine Check-ups</option>
            <option>Vaccinations</option>
            <option>Emergency Care</option>
            <option>Dental Care</option>
            <option>Surgery</option>
            <option>Nutrition Guidance</option>
          </select>
        </div>

        {/* Dynamic Extra Info */}
        {form.serviceType === "Vaccinations" && (
          <div className="form-group">
            <label>Which Month Vaccination?</label>
            <input
              type="text"
              name="extraInfo"
              value={form.extraInfo}
              onChange={handleChange}
              placeholder="Eg: 6th Month, Annual"
              required
            />
          </div>
        )}

        {form.serviceType === "Surgery" && (
          <div className="form-group">
            <label>Type of Surgery</label>
            <input
              type="text"
              name="extraInfo"
              value={form.extraInfo}
              onChange={handleChange}
              placeholder="Eg: Neutering, Tumor Removal"
              required
            />
          </div>
        )}

        {form.serviceType === "Routine Check-ups" && (
          <div className="form-group">
            <label>Any Concerns?</label>
            <textarea
              name="extraInfo"
              value={form.extraInfo}
              onChange={handleChange}
              placeholder="Eg: Weight loss, appetite changes"
              required
            />
          </div>
        )}

        {/* Payment */}
        <div className="form-group">
          <label>Payment Mode</label>
          <select
            name="paymentMode"
            value={form.paymentMode}
            onChange={handleChange}
            required
          >
            <option value="">--Select Payment--</option>
            <option>Cash</option>
            <option>UPI</option>
            <option>Card</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">
          ✅ Book Appointment
        </button>
      </form>
    </div>
  );
}
