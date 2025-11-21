import React from "react";
import { useNavigate } from "react-router-dom";
import "./training.css"; // import your CSS

export default function PetTraining() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/dashboard"); // navigate back to dashboard
  };

  return (
    <div className="training-container">
      <header className="training-header" >
        <h1>🐕 Pet Training </h1>
        <p>Build obedience, discipline, and confidence in your pets!</p>
      </header>

      <div className="services">
        <div className="service-card" onClick={() => navigate("/training/obedience")}>
          <h2>Basic Obedience</h2>
          <p>Training your pet to follow simple commands like sit, stay, and come.</p>
        </div>
        <div className="service-card" onClick={() => navigate("/training/advanced")}>
          <h2>Advanced Skills</h2>
          <p>Teach your pet complex behaviors and tricks.</p>
        </div>
        <div className="service-card" onClick={() => navigate("/training/correction")}>
          <h2>Behavior Correction</h2>
          <p>Address issues like barking, jumping, and aggression.</p>
        </div>
        <div className="service-card" onClick={() => navigate("/training/puppy")}>
          <h2>Puppy Training</h2>
          <p>Special care and training for young pups to start them off right.</p>
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
