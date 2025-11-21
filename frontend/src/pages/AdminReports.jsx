import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "../api";

const AdminReports = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/api/feedback`)
      .then((res) => setFeedbacks(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "30px", backgroundColor: "", minHeight: "100vh" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Feedback Reports</h2>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          backgroundColor: "white",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#222", color: "white" }}>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Email</th>
            <th style={tableHeaderStyle}>Service</th>
            <th style={tableHeaderStyle}>Rating</th>
            <th style={tableHeaderStyle}>Message</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.length > 0 ? (
            feedbacks.map((fb) => (
              <tr key={fb._id} style={{ textAlign: "center" }}>
                <td style={tableCellStyle}>{fb.name}</td>
                <td style={tableCellStyle}>{fb.email}</td>
                <td style={tableCellStyle}>{fb.service}</td>
                <td style={tableCellStyle}>{fb.rating}</td>
                <td style={tableCellStyle}>{fb.message}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center", padding: "15px" }}>
                No feedback available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

const tableHeaderStyle = {
  border: "1px solid black",
  padding: "12px",
};

const tableCellStyle = {
  border: "1px solid black",
  padding: "10px",
};

export default AdminReports;
