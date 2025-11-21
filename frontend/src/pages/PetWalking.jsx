import React from "react";
import { useNavigate } from "react-router-dom";
import "./walking.css";

export default function PetWalking() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/dashboard");
  };

  return (
    <div className="walking-container">
      <header className="walking-header">
        <h1>🐾 Pet Walking Services</h1>
        <p>Daily exercise and joy for your furry companions!</p>
      </header>

      <section className="services">
        <div className="service-card" onClick={() => navigate("/walking/morning")}>
          <h2>Morning Walks</h2>
          <p>Start your pet’s day with refreshing morning walks.</p>
        </div>
        <div className="service-card" onClick={() => navigate("/walking/evening")}>
          <h2>Evening Walks</h2>
          <p>Relaxing walks to wind down the day in style.</p>
        </div>
        <div className="service-card" onClick={() => navigate("/walking/long")}>
          <h2>Long Distance Walks</h2>
          <p>Great for energetic dogs who need more activity.</p>
        </div>
        <div className="service-card" onClick={() => navigate("/walking/group")}>
          <h2>Group Walks</h2>
          <p>Socialize with other pets in safe walking groups.</p>
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
