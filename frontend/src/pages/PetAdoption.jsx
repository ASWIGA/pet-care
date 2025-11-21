import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "../api";

export default function PetAdoption() {
  const [pets, setPets] = useState([]);
  const [selectedPetId, setSelectedPetId] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    reason: ""
  });

  useEffect(() => {
    axios.get(`${API}/api/pets`)
      .then(res => setPets(res.data))
      .catch(err => console.error("Error fetching pets:", err));
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedPetId) return alert("Select a pet to adopt");

    try {
      await axios.post(`${API}/api/adoptions`, {
        pet: selectedPetId,
        adopterName: form.name,
        adopterEmail: form.email,
        adopterPhone: form.phone,
        adopterAddress: form.address,
        reason: form.reason
      });
      alert("✅ Adoption request submitted!");
      setSelectedPetId(null);
      setForm({ name: "", email: "", phone: "", address: "", reason: "" });
    } catch (err) {
      console.error(err.response?.data || err);
      alert("❌ Failed to submit adoption request");
    }
  };

  return (
    <div className="adoption-container">
      <h1 className="title">🐾 Adopt Your New Best Friend 🐾</h1>

      {/* Pet Cards */}
      <div className="pets-grid">
        {pets.map(pet => (
          <div
            key={pet._id}
            className={`pet-card ${selectedPetId === pet._id ? "selected" : ""}`}
          >
            <img src={pet.imageUrl} alt={pet.name} />
            <h2>{pet.name}</h2>
            <p>{pet.type} • {pet.age} months old</p>
            <button onClick={() => setSelectedPetId(pet._id)}>
              {selectedPetId === pet._id ? "Selected ✅" : "Adopt"}
            </button>
          </div>
        ))}
      </div>

      {/* Adoption Form */}
      {selectedPetId && (
        <form onSubmit={handleSubmit} className="adoption-form">
          <h2>Adoption Form</h2>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" type="email" required />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" required />
          <input name="address" value={form.address} onChange={handleChange} placeholder="Address" required />
          <textarea name="reason" value={form.reason} onChange={handleChange} placeholder="Why do you want to adopt?" required />
          <button type="submit">Submit Request</button>
        </form>
      )}

      {/* Inline CSS */}
      <style jsx>{`
        .adoption-container {
          max-width: 1100px;
          margin: 30px auto;
          padding: 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .title {
          text-align: center;
          color: #4a148c;
          margin-bottom: 25px;
          font-size: 28px;
        }

        .pets-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }

        .pet-card {
          background: white;
          padding: 15px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          text-align: center;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .pet-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        }

        .pet-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 10px;
        }

        .pet-card h2 {
          margin: 10px 0 5px;
          font-size: 20px;
          color: #333;
        }

        .pet-card p {
          margin: 0;
          color: #666;
          font-size: 14px;
        }

        .pet-card button {
          margin-top: 10px;
          padding: 8px 15px;
          background: #6a1b9a;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: bold;
          transition: background 0.3s;
        }

        .pet-card button:hover {
          background: #4a148c;
        }

        .pet-card.selected {
          border: 2px solid #6a1b9a;
        }

        .adoption-form {
          max-width: 500px;
          margin: 20px auto;
          background: white;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .adoption-form h2 {
          margin-bottom: 10px;
          color: #6a1b9a;
          text-align: center;
        }

        .adoption-form input,
        .adoption-form textarea {
          padding: 10px;
          border-radius: 8px;
          border: 1px solid #ccc;
          font-size: 14px;
        }

        .adoption-form textarea {
          resize: none;
          min-height: 80px;
        }

        .adoption-form button {
          background: #6a1b9a;
          color: white;
          border: none;
          padding: 10px;
          border-radius: 8px;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
        }

        .adoption-form button:hover {
          background: #4a148c;
        }
      `}</style>
    </div>
  );
}
