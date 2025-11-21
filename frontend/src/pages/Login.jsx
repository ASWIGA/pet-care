import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/img1.jpg"; 
import API from "../api";
// make sure img1.jpg is in src/assets

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${API}/api/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Login failed");

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      localStorage.setItem("name", data.name);
      if (data.role === "admin") nav("/admin");
      else nav("/dashboard");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.background}>
      <div style={styles.overlay}>
        <div style={styles.card}>
          <h2 style={styles.title}>Login</h2>
          <form style={styles.form} onSubmit={submit}>
            <input
              style={styles.input}
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              style={styles.input}
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button style={styles.btn} type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
            <div style={styles.smallText}>
              New here? <a href="/signup" style={styles.link}>Signup</a>
            </div>
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
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.25)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    maxWidth: "350px",
    width: "90%",
    backgroundColor: "#f5f0ff",
    padding: "25px",
    borderRadius: "20px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    textAlign: "center",
    color: "#4b0082",
  },
  title: {
    margin: 0,
    color: "#4b0082",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #d8bfff",
    outline: "none",
    fontSize: "16px",
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
  },
  smallText: {
    fontSize: "0.85rem",
    marginTop: "10px",
  },
  link: {
    color: "#6a0dad",
    textDecoration: "none",
    fontWeight: "600",
  }
};
