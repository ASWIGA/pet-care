import React from "react";
import { useNavigate } from "react-router-dom";
import "./vet.css"; // import your CSS

export default function VetCare() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/dashboard"); // go back to dashboard
  };

  // function to open booking form with service name
  const bookService = (serviceName) => {
    navigate(`/vet/form?service=${encodeURIComponent(serviceName)}`);
  };

  return (
    <div className="vet-container">
      <header className="vet-header">
        <h1>🩺 Veterinary Care Services</h1>
        <p>Providing quality health checkups and medical support for your beloved pets</p>
      </header>

      <section className="services">
        <div className="service-card" onClick={() => bookService("Routine Check-ups")}>
          <h2>Routine Check-ups</h2>
          <p>Regular health screenings to ensure your pet is healthy and thriving.</p>
        </div>

        <div className="service-card" onClick={() => bookService("Vaccinations")}>
          <h2>Vaccinations</h2>
          <p>Protect your pets from diseases with timely vaccinations.</p>
        </div>

        <div className="service-card" onClick={() => bookService("Emergency Care")}>
          <h2>Emergency Care</h2>
          <p>Immediate medical attention for any urgent pet health issues.</p>
        </div>

        <div className="service-card" onClick={() => bookService("Dental Care")}>
          <h2>Dental Care</h2>
          <p>Oral exams and cleaning to keep your pet's teeth and gums healthy.</p>
        </div>

        <div className="service-card" onClick={() => bookService("Surgery")}>
          <h2>Surgery</h2>
          <p>Expert veterinary surgeries performed with utmost care and hygiene.</p>
        </div>

        <div className="service-card" onClick={() => bookService("Nutrition Guidance")}>
          <h2>Nutrition Guidance</h2>
          <p>Personalized diet plans and nutritional advice for your pets.</p>
        </div>
      </section>

      <div className="back-button">
        <button className="btn-back" onClick={goBack}>
          ⬅️ Back to Dashboard
        </button>
      </div>
    </div>
  );
}
