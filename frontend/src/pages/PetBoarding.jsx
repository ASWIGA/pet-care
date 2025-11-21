import React from "react";
import { useNavigate } from "react-router-dom";
import "./boarding.css"; // import your CSS

export default function PetBoarding() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/dashboard"); // navigate back to dashboard
  };

  return (
    <div className="boarding-container">
      <header className="boarding-header">
        <h1>🏨 Pet Boarding Services</h1>
        <p>Safe, comfortable, and loving environment for your pets while you're away.</p>
      </header>

      <div className="services">
        <div className="service-card">
          <h2>Short-Term Boarding</h2>
          <p>Overnight stays for vacations or emergencies with proper care and feeding.</p>
        </div>
        <div className="service-card">
          <h2>Long-Term Boarding</h2>
          <p>Extended care for pets while you're away on long trips or assignments.</p>
        </div>
        <div className="service-card">
          <h2>Daily Play & Exercise</h2>
          <p>Daily walks and activities to keep your pet active and happy.</p>
        </div>
        <div className="service-card">
          <h2>Vet On-Call</h2>
          <p>Emergency vet access during your pet's stay.</p>
        </div>
      </div>

      <div className="back-button">
        <button className="btn-back" onClick={goBack}>
          ⬅️ Back to Dashboard
        </button>
      </div>
    </div>
  );
}
