import { useEffect, useState } from "react";
import API, { authHeader } from "../api";

export default function Users() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API}/api/users`, {
        headers: { "Content-Type": "application/json", ...authHeader() }
      });
      const data = await res.json();
      if (!res.ok && res.status !== 200) throw new Error(data.error || "Failed to load");
      setList(data);
    } catch (err) {
      alert(err.message || "Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  const removeUser = async (id) => {
    if (!confirm("Are you sure to delete this user?")) return;
    try {
      const res = await fetch(`${API}/api/users/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json", ...authHeader() }
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Delete failed");
      await load();
    } catch (err) {
      alert(err.message || "Delete failed");
    }
  };

  useEffect(() => { load(); }, []);

  return (
    <div className="users-container">
      <h1 className="dash-title">👤 Registered Users</h1>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <table className="users-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((u) => (
              <tr key={u._id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
                <td>
                  <button className="btn remove" onClick={() => removeUser(u._id)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
            {list.length === 0 && (
              <tr>
                <td colSpan="4" className="small">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}

      <style jsx>{`
        .users-container {
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        .dash-title {
          text-align: center;
          margin-bottom: 20px;
          font-size: 24px;
          font-weight: bold;
          color: #222;
        }
        .users-table {
          width: 100%;
          border-collapse: collapse;
          background: #fff;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
        }
        .users-table th,
        .users-table td {
          border: 2px solid black;
          padding: 12px;
          text-align: center;
        }
        .users-table th {
          background: black;
          color: white;
          text-transform: uppercase;
          font-size: 14px;
          letter-spacing: 1px;
        }
        .users-table tr:nth-child(even) {
          background: #f8f8f8;
        }
        .users-table tr:hover {
          background: #f1f1f1;
          transition: 0.3s;
        }
        .btn.remove {
          background: red;
          color: white;
          padding: 6px 12px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          font-weight: bold;
        }
        .btn.remove:hover {
          opacity: 0.85;
        }
        .small {
          text-align: center;
          padding: 12px;
          color: gray;
          font-style: italic;
        }
      `}</style>
    </div>
  );
}
