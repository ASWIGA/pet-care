import React, { useState, useEffect } from "react";
import axios from "axios";
import API from "../api";

export default function AdminPets() {
  const [pets, setPets] = useState([]);
  const [form, setForm] = useState({ name: "", type: "", age: "", breed: "", info: "", imageUrl: "" });

  useEffect(() => {
    axios.get(`${API}/api/pets`).then(res => setPets(res.data));
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(`${API}/api/pets`, form);
    setPets([...pets, res.data]);
    setForm({ name: "", type: "", age: "", breed: "", info: "", imageUrl: "" });
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API}/api/pets/${id}`);
    setPets(pets.filter(p => p._id !== id));
  };

  return (
    <div className="admin-pets-page">
      <h1>🐾 Manage Pets for Adoption</h1>

      <form onSubmit={handleSubmit} className="pet-form">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Pet Name" required />
        <input name="type" value={form.type} onChange={handleChange} placeholder="Pet Type" required />
        <input name="age" value={form.age} onChange={handleChange} placeholder="Age (e.g. 3 months)" required />
        <input name="breed" value={form.breed} onChange={handleChange} placeholder="Breed" />
        <textarea name="info" value={form.info} onChange={handleChange} placeholder="Additional Info" />
        <input name="imageUrl" value={form.imageUrl} onChange={handleChange} placeholder="Image URL" />
        <button type="submit">Add Pet</button>
      </form>

      <div className="pet-grid">
        {pets.map(pet => (
          <div key={pet._id} className="pet-card">
            <img src={pet.imageUrl} alt={pet.name} />
            <h2>{pet.name}</h2>
            <p>{pet.type}, {pet.age}</p>
            <button onClick={() => handleDelete(pet._id)} className="delete-btn">Delete</button>
          </div>
        ))}
      </div>

      {/* Inline CSS */}
      <style jsx>{`
        .admin-pets-page {
          padding: 40px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: #f8f9fa;
        }

        h1 {
          text-align: center;
          font-size: 32px;
          margin-bottom: 30px;
          color: #2c3e50;
        }

        .pet-form {
          display: grid;
          gap: 15px;
          max-width: 600px;
          margin: 0 auto 40px auto;
          background: #ffffff;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
        }

        .pet-form input,
        .pet-form textarea {
          padding: 12px;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 16px;
          outline: none;
        }

        .pet-form button {
          padding: 12px;
          background-color: #6a1b9a;
          color: white;
          font-weight: bold;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: 0.3s;
        }

        .pet-form button:hover {
          background-color: #4a148c;
        }

        .pet-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
        }

        .pet-card {
          background: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 6px 18px rgba(0,0,0,0.1);
          text-align: center;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .pet-card:hover {
          transform: translateY(-8px) rotate(1deg);
          box-shadow: 0 12px 25px rgba(0,0,0,0.15);
          animation: shake 0.4s ease-in-out;
        }

        .pet-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }

        .pet-card h2 {
          font-size: 22px;
          margin: 10px 0 5px 0;
          color: #34495e;
        }

        .pet-card p {
          margin-bottom: 10px;
          color: #555;
        }

        .delete-btn {
          background-color: #e53935;
          color: white;
          border: none;
          padding: 10px 15px;
          border-radius: 6px;
          cursor: pointer;
          margin-bottom: 10px;
          font-weight: bold;
          transition: 0.3s;
        }

        .delete-btn:hover {
          background-color: #c62828;
        }

        /* Shake Animation */
        @keyframes shake {
          0% { transform: translate(1px, 1px) rotate(0deg); }
          20% { transform: translate(-1px, -2px) rotate(-1deg); }
          40% { transform: translate(-3px, 0px) rotate(1deg); }
          60% { transform: translate(3px, 2px) rotate(0deg); }
          80% { transform: translate(1px, -1px) rotate(1deg); }
          100% { transform: translate(-1px, 2px) rotate(-1deg); }
        }
      `}</style>
    </div>
  );
}
