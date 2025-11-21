import { useNavigate } from "react-router-dom";
import "./groomingServices.css";


export default function GroomingServices() {
  const navigate = useNavigate();

  const goToForm = (service) => {
    // ✅ Navigate to GroomingForm with query param
    navigate(`/grooming/form?service=${encodeURIComponent(service)}`);
  };

  return (
    <div className="grooming-container">
      <header>
        <h1>🐾 Pet Grooming Services</h1>
        <p>Your pet deserves the best pampering!</p>
      </header>

      <section className="services">
        <div className="service-card" onClick={() => goToForm("Bath & Blow Dry")}>
          <h2>Bath & Blow Dry</h2>
          <p>Gentle shampoo, coat conditioning, and a warm blow dry.</p>
        </div>
        <div className="service-card" onClick={() => goToForm("Nail Trimming")}>
          <h2>Nail Trimming</h2>
          <p>Safe and stress-free nail care for your pets.</p>
        </div>
        <div className="service-card" onClick={() => goToForm("Hair Styling")}>
          <h2>Hair Styling</h2>
          <p>Custom cuts and styles for every breed and personality.</p>
        </div>
        <div className="service-card" onClick={() => goToForm("Ear Cleaning")}>
          <h2>Ear Cleaning</h2>
          <p>Keep your pet’s ears healthy and clean.</p>
        </div>
      </section>

      <div className="back-button">
        <button onClick={() => navigate("/dashboard")}>⬅️ Back to Dashboard</button>
      </div>
    </div>
  );
}
