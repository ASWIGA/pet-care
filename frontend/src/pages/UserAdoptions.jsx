import React, { useState } from "react";
import axios from "axios";
import API from "../api";

export default function UserAdoptions() {
  const [adoptions, setAdoptions] = useState([]);
  const [email, setEmail] = useState("");

  const fetchAdoptions = async () => {
    if (!email) return;
    try {
      const res = await axios.get(`${API}/api/adoptions/user/${email}`);
      setAdoptions(res.data);
    } catch (err) {
      console.error("❌ Error fetching adoptions:", err);
      alert("Failed to fetch adoptions");
    }
  };

  return (
    <div className="container">
      <style>{`
        body {
          margin: 0;
          background: #fdfdfd;
        }

        .container {
          font-family: "Segoe UI", Arial, sans-serif;
          padding: 30px;
          background: linear-gradient(to right, #e5e9ebff, #fffaffff);
          min-height: 100vh;
        }

        h1 {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 20px;
          color: #2d2d2d;
        }

        .input-section {
          margin-bottom: 25px;
        }

        .input-section input {
          padding: 10px 14px;
          width: 260px;
          border: 1px solid #0c0a0aff;
          border-radius: 8px;
          font-size: 15px;
          margin-right: 10px;
          outline: none;
        }

        .input-section button {
          padding: 10px 16px;
          background: #a3d2ff; /* soft blue */
          border: none;
          border-radius: 8px;
          font-size: 15px;
          cursor: pointer;
          transition: background 0.3s, transform 0.2s;
        }

        .input-section button:hover {
          background: #7fc0ff;
          transform: translateY(-2px);
        }

        /* Grid Layout */
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 20px;
        }

        /* Card Styling */
        .card {
          background: #aeeaedff;
          padding: 18px;
          border-radius: 14px;
          border: 1px solid #0b0c0cff;
          font-size: 15px;
          line-height: 1.5;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
        }

        .card h2 {
          font-size: 18px;
          margin-bottom: 8px;
          color: #222;
        }

        .card p {
          margin: 4px 0;
          color: #444;
        }

        /* Hover + Shake Animation */
        .card:hover {
          transform: translateY(-6px) rotate(-1deg);
          box-shadow: 0 6px 18px rgba(0,0,0,0.1);
          animation: shake 0.4s;
        }

        @keyframes shake {
          0% { transform: translate(1px, 1px) rotate(0deg); }
          20% { transform: translate(-2px, 0px) rotate(-1deg); }
          40% { transform: translate(2px, 1px) rotate(1deg); }
          60% { transform: translate(-1px, -1px) rotate(0deg); }
          80% { transform: translate(1px, 2px) rotate(1deg); }
          100% { transform: translate(0px, 0px) rotate(0deg); }
        }

        /* Status Badges */
        .status {
          font-weight: bold;
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 14px;
        }

        .status.pending {
          background: #fff5cc;
          color: #a68b00;
        }

        .status.approved {
          background: #d4f8d4;
          color: #2d7a2d;
        }

        .status.rejected {
          background: #ffd6d6;
          color: #c62828;
        }
      `}</style>

      <h1>My Adoption Requests</h1>

      {/* Email input */}
      <div className="input-section">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <button onClick={fetchAdoptions}>View</button>
      </div>

      {/* Grid of requests */}
      <div className="grid">
        {adoptions.length === 0 ? (
          <p style={{ color: "#777", fontSize: "15px" }}>No requests found</p>
        ) : (
          adoptions.map((req) => (
            <div key={req._id} className="card">
              <h2>{req.pet?.name}</h2>
              <p><strong>Email:</strong> {req.adopterEmail}</p>
              <p><strong>Phone:</strong> {req.adopterPhone}</p>
              <p><strong>Address:</strong> {req.adopterAddress}</p>
              <p><strong>Reason:</strong> {req.adoptionReason}</p>
              <p>
                <strong>Status:</strong>{" "}
                <span className={`status ${req.status?.toLowerCase()}`}>
                  {req.status}
                </span>
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
