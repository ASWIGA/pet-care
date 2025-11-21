import { useEffect, useState } from "react";
import API from "../api";

export default function AdminAppointments() {
  const [grooming, setGrooming] = useState([]);
  const [vet, setVet] = useState([]);

  // ✅ Fetch Grooming Appointments
  const fetchGrooming = async () => {
    try {
      const res = await fetch(`${API}/api/grooming`);
      const data = await res.json();
      setGrooming(data);
    } catch (err) {
      console.error("Failed to fetch grooming appointments:", err);
    }
  };

  // ✅ Fetch Vet Appointments (fixed endpoint)
  const fetchVet = async () => {
    try {
      const res = await fetch(`${API}/api/vet`);
      const data = await res.json();
      setVet(data);
    } catch (err) {
      console.error("Failed to fetch vet appointments:", err);
    }
  };

  // ✅ Update status (Accept/Reject)
  const updateStatus = async (id, status, type) => {
    const url =
      type === "grooming"
        ? `${API}/api/grooming/${id}`
        : `${API}/api/vet/${id}`;

    try {
      await fetch(url, {
        method: "PUT", // unified PUT
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });

      type === "grooming" ? fetchGrooming() : fetchVet();
    } catch (err) {
      console.error("Failed to update status:", err);
    }
  };

  useEffect(() => {
    fetchGrooming();
    fetchVet();
  }, []);

  return (
    <div className="container">
      <h2 className="title">📋 Appointment Management</h2>

      {/* Grooming Table */}
      <h3>🐾 Grooming Appointments</h3>
      <table className="appointments-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Service</th>
            <th>Date</th>
            <th>Time</th>
            <th>Pet Type</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {grooming.map((b) => (
            <tr key={b._id}>
              <td>{b.name}</td>
              <td>{b.service}</td>
              <td>{b.date}</td>
              <td>{b.time}</td>
              <td>{b.petType}</td>
              <td>
                <span className={`status ${b.status.toLowerCase()}`}>
                  {b.status}
                </span>
              </td>
              <td>
                <button
                  className="btn accept"
                  onClick={() => updateStatus(b._id, "Accepted", "grooming")}
                >
                  Accept
                </button>
                <button
                  className="btn reject"
                  onClick={() => updateStatus(b._id, "Rejected", "grooming")}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Vet Table */}
      <h3>🩺 Veterinary Appointments</h3>
      <table className="appointments-table">
        <thead>
          <tr>
            <th>Pet</th>
            <th>Owner</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Service</th>
            <th>Extra Info</th>
            <th>Date</th>
            <th>Time</th>
            <th>Payment</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {vet.map((b) => (
            <tr key={b._id}>
              <td>{b.petType}</td>
              <td>{b.ownerName}</td>
              <td>{b.email}</td>
              <td>{b.mobile}</td>
              <td>{b.serviceType}</td>
              <td>{b.extraInfo}</td>
              <td>{new Date(b.date).toLocaleDateString()}</td>
              <td>{b.time}</td>
              <td>{b.paymentMode}</td>
              <td>
                <span className={`status ${b.status.toLowerCase()}`}>
                  {b.status}
                </span>
              </td>
              <td>
                <button
                  className="btn accept"
                  onClick={() => updateStatus(b._id, "Accepted", "vet")}
                >
                  Accept
                </button>
                <button
                  className="btn reject"
                  onClick={() => updateStatus(b._id, "Rejected", "vet")}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Inline CSS */}
      <style jsx>{`
        .container {
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        .title {
          text-align: center;
          margin-bottom: 20px;
          color: #222;
        }
        .appointments-table {
          width: 100%;
          margin-bottom: 40px;
          border-collapse: collapse;
          background: #fff;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        }
        .appointments-table th,
        .appointments-table td {
          border: 2px solid black;
          padding: 12px;
          text-align: center;
        }
        .appointments-table th {
          background: #000;
          color: #fff;
          font-weight: bold;
          text-transform: uppercase;
        }
        .status.accepted {
          color: green;
          font-weight: bold;
        }
        .status.rejected {
          color: red;
          font-weight: bold;
        }
        .status.pending {
          color: orange;
          font-weight: bold;
        }
        .btn {
          padding: 6px 12px;
          margin: 0 4px;
          border: none;
          cursor: pointer;
          border-radius: 4px;
          font-size: 14px;
          font-weight: bold;
        }
        .btn.accept {
          background: green;
          color: white;
        }
        .btn.reject {
          background: red;
          color: white;
        }
        .btn:hover {
          opacity: 0.85;
        }
      `}</style>
    </div>
  );
}
