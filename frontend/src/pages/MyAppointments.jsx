import { useState } from "react";
import API from "../api";

export default function MyAppointments() {
  const [email, setEmail] = useState("");
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      // Grooming appointments
      const resGrooming = await fetch(`${API}/api/grooming/user/${email}`);
      if (!resGrooming.ok) throw new Error("Failed to fetch grooming appointments");
      const groomingData = await resGrooming.json();

      // Vet appointments
      const resVet = await fetch(`${API}/api/vet/user/${email}`);
      if (!resVet.ok) throw new Error("Failed to fetch vet appointments");
      const vetData = await resVet.json();

      // Combine bookings
      const combined = [
        ...groomingData.map(b => ({ ...b, type: "Grooming" })),
        ...vetData.map(b => ({ ...b, type: "Vet" }))
      ];

      setBookings(combined);
    } catch (err) {
      console.error(err);
      alert("Error fetching bookings");
    }
  };

  const filterByStatus = (status) =>
    bookings.filter((b) => b.status === status);

  return (
    <div className="container">
      <h2>My Appointments</h2>
      <div className="input-group">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={fetchBookings}>View My Appointments</button>
      </div>

      {["Pending", "Accepted", "Rejected"].map((status) => (
        <div key={status} className="status-section">
          <h3>{status} Appointments</h3>
          {filterByStatus(status).length > 0 ? (
            filterByStatus(status).map((b) => (
              <div key={b._id} className="card">
                <div className="card-header">
                  <span className="icon">{b.type === "Grooming" ? "🐾" : "🩺"}</span>
                  <h4>{b.type} - {b.serviceType || b.service}</h4>
                </div>
                <p>
                  {b.date} | {b.time} | {b.petType} {b.type === "Vet" && `| ${b.paymentMode}`}
                </p>
                <p>Status: <span className={`status-${b.status}`}>{b.status}</span></p>
              </div>
            ))
          ) : (
            <p className="no-bookings">No {status.toLowerCase()} appointments.</p>
          )}
        </div>
      ))}

      {/* Inline CSS */}
      <style jsx>{`
        .container {
          max-width: 900px;
          margin: 20px auto;
          padding: 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: #f0f4f8;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
        }

        h2 {
          text-align: center;
          color: #333;
          margin-bottom: 25px;
        }

        .input-group {
          display: flex;
          justify-content: center;
          margin-bottom: 30px;
        }

        input[type="email"] {
          width: 60%;
          padding: 12px;
          border-radius: 6px 0 0 6px;
          border: 1px solid #600404ff;
          font-size: 15px;
          outline: none;
        }

        button {
          padding: 12px 20px;
          background-color: #6b5b95;
          color: white;
          border: none;
          border-radius: 0 6px 6px 0;
          cursor: pointer;
          font-weight: bold;
          font-size: 15px;
          transition: 0.3s;
        }

        button:hover {
          background-color: #563d7c;
        }

        .status-section {
          margin-top: 30px;
        }

        .status-section h3 {
          margin-bottom: 12px;
          color: #444;
          border-bottom: 2px solid #553b97ff;
          padding-bottom: 6px;
        }

        .card {
          background: white;
          padding: 18px;
          margin-bottom: 12px;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(122, 25, 90, 0.08);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .card:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 18px rgba(0,0,0,0.12);
        }

        .card-header {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
        }

        .card-header .icon {
          font-size: 24px;
          margin-right: 10px;
        }

        .card h4 {
          margin: 0;
          font-weight: 600;
          color: #792727ff;
        }

        .card p {
          margin: 4px 0;
          color: #334998ff;
        }

        .status-Pending {
          color: orange;
          font-weight: bold;
        }

        .status-Accepted {
          color: green;
          font-weight: bold;
        }

        .status-Rejected {
          color: red;
          font-weight: bold;
        }

        .no-bookings {
          color: #888;
          font-style: italic;
        }
      `}</style>
    </div>
  );
}
