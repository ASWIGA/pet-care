import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/img1.jpg"; // make sure img1.jpg is in src/assets
import API from "../api";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "user" });
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${API}/api/users/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Signup failed");
      alert("Signup successful! Please login.");
      nav("/login");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.background}>
      <div style={styles.overlay}>
        <div className="card" style={styles.card}>
          <h2 style={{ textAlign: "center", color: "#6a0dad" }}>Create Account</h2>
          <form className="gap-12" onSubmit={submit} style={styles.form}>
            <input className="input" placeholder="Name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
            <input className="input" type="email" placeholder="Email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
            <input className="input" type="password" placeholder="Password" required value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
            <select value={form.role} onChange={e => setForm({ ...form, role: e.target.value })}>
              <option value="user">User</option>
              <option value="admin"></option>
            </select>
            <button className="btn" type="submit" disabled={loading} style={styles.btn}>
              {loading ? "Signing up..." : "Signup"}
            </button>
            <div className="text-center small">Already have an account? <a href="/login">Login here</a></div>
          </form>
        </div>
      </div>
    </div>
  );
}

const styles = {
  background: {
    backgroundImage: `url(${img1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
  display: "flex",
  justifyContent: "center",  // centers horizontally
  alignItems: "center",      // centers vertically
  width: "100vw",             // full viewport width
  height: "100vh",            // full viewport height
  backgroundColor: "rgba(0,0,0,0.3)", // optional overlay
},

  card: {
    maxWidth: "350px",  // smaller
    width: "80%",
    padding: "25px",
    borderRadius: "20px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
    backgroundColor: "#ffffff",
}
,
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  btn: {
    background: "linear-gradient(45deg, #6a0dad, #ff69b4)",
    color: "#fff",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: "10px",
  }
};
