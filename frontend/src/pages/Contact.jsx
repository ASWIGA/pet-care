import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <h1>📞 Contact Us</h1>
      <p className="tagline">We’d love to hear from you! Reach out anytime.</p>

      <div className="contact-grid">
        <div className="contact-card">
          <h2>📍 Address</h2>
          <p>Vedhas Pet Care</p>
          <p>Gandhi Main Street</p>
          <p>Chennai, Tamil Nadu</p>
          <p>India - 600001</p>
        </div>

        <div className="contact-card">
          <h2>📧 Email</h2>
          <p>support@vedhaspetcare.com</p>
          <p>info@vedhaspetcare.com</p>
        </div>

        <div className="contact-card">
          <h2>📱 Phone</h2>
          <p>+91 98765 43210</p>
          <p>+91 91234 56789</p>
        </div>

        <div className="contact-card">
          <h2>⏰ Working Hours</h2>
          <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
    </div>
  );
}
