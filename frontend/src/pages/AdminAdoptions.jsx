import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "../api";

export default function AdminAdoptions() {
  const [adoptions, setAdoptions] = useState([]);

  useEffect(() => {
    fetchAdoptions();
  }, []);

  const fetchAdoptions = () => {
     axios.get(`${API}/api/adoptions`)
      .then(res => setAdoptions(res.data))
      .catch(err => console.error(err));
  };

  const handleAction = async (id, status) => {
    try {
      await axios.put(`${API}/api/adoptions/${id}`, { status }); //
      setAdoptions(adoptions.map(a => a._id === id ? { ...a, status } : a));
    } catch (err) {
      console.error(err);
      alert("Failed to update status");
    }
  };

  return (
    <div className="admin-adoptions-page">
      <h1>❤️ Adoption Requests</h1>

      <div className="adoptions-grid">
        {adoptions.map(req => (
          <div key={req._id} className="adoption-card">
            <img src={req.pet?.imageUrl || "https://via.placeholder.com/150"} alt={req.pet?.name} className="pet-image" />
            <h2>{req.pet?.name}</h2>
            <p><strong>Name:</strong> {req.adopterName}</p>
            <p><strong>Email:</strong> {req.adopterEmail}</p>
            <p><strong>Phone:</strong> {req.adopterPhone}</p>
            <p><strong>Address:</strong> {req.adopterAddress}</p>
            <p><strong>Reason:</strong> {req.reason}</p>
            <p><strong>Status:</strong> <span className={`status-${req.status}`}>{req.status}</span></p>

            {req.status === "Pending" && (
              <div className="action-buttons">
                <button onClick={() => handleAction(req._id, "Approved")} className="approve-btn">Approve</button>
                <button onClick={() => handleAction(req._id, "Rejected")} className="reject-btn">Reject</button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Inline CSS */}
      <style jsx>{`
        .admin-adoptions-page {
          padding: 40px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: #f4f6f8;
        }

        h1 {
          text-align: center;
          font-size: 32px;
          margin-bottom: 30px;
          color: #2c3e50;
        }

        .adoptions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
        }

        .adoption-card {
          background: #ffffff;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.08);
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .adoption-card:hover {
          transform: translateY(-8px) rotate(0.5deg);
          box-shadow: 0 12px 25px rgba(0,0,0,0.15);
          animation: shake 0.4s ease-in-out;
        }

        .adoption-card h2 {
          font-size: 22px;
          margin-bottom: 10px;
          color: #6a1b9a;
        }

        .adoption-card p {
          margin: 4px 0;
          color: #555;
        }

        .status-Pending {
          color: orange;
          font-weight: bold;
        }

        .status-Approved {
          color: green;
          font-weight: bold;
        }

        .status-Rejected {
          color: red;
          font-weight: bold;
        }

        .action-buttons {
          display: flex;
          gap: 10px;
          margin-top: 10px;
        }

        .approve-btn {
          background-color: #2ecc71;
          color: white;
          border: none;
          padding: 8px 14px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: bold;
          transition: 0.3s;
        }

        .approve-btn:hover {
          background-color: #27ae60;
        }

        .reject-btn {
          background-color: #e74c3c;
          color: white;
          border: none;
          padding: 8px 14px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: bold;
          transition: 0.3s;
        }

        .reject-btn:hover {
          background-color: #c0392b;
        }

        /* Shake animation */
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
