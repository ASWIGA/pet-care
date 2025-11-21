import React from "react";
import { useNavigate } from "react-router-dom";
import morningImg from "../assets/img3.jpg";

export default function MorningWalk() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      

      <header style={styles.header}>
        <h1 style={styles.title}>🌅 Morning Walks</h1>
        <p style={styles.subtitle}>Start your furry friend's day with energy & happiness!</p>
      </header>

      <div style={styles.hero}>
        <img src={morningImg} alt="Morning Walk" style={styles.heroImg} />
      </div>

      <section style={styles.content}>
        <h2 style={styles.subHeading}>✨ Inspiring Quotes</h2>
        <ul style={styles.list}>
          <li>“An early walk is a blessing for the whole day.” – Thoreau</li>
          <li>“Morning walks are a gift of peace before the world awakens.”</li>
        </ul>

        <h2 style={styles.subHeading}>🐕 Benefits of Morning Walks</h2>
        <ul style={styles.list}>
          <li>Boosts your pet’s metabolism and energy levels</li>
          <li>Improves mood and reduces anxiety</li>
          <li>Prevents obesity by burning calories</li>
          <li>Strengthens the bond between you and your pet</li>
        </ul>
        <center><button style={styles.backBtn} onClick={() => navigate("/walking")}>
        ⬅️ Back
      </button></center>
      </section>
    </div>
  );
}

const styles = {
  container: { 
    fontFamily: "'Poppins', sans-serif", 
    padding: "20px", 
    background: "linear-gradient(to bottom right, #fceff9, #e0f7fa)", 
    minHeight: "100vh" 
  },
  backBtn: {
    background: "linear-gradient(45deg, #ff69b4, #ff1493)",
    border: "none",
    padding: "10px 20px",
    borderRadius: "25px",
    cursor: "pointer",
    color: "#fff",
    marginBottom: "20px",
    fontWeight: "bold",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    transition: "0.3s",
  },
  header: { 
    textAlign: "center", 
    marginBottom: "20px",
    color: "#4b0082"
  },
  title: { fontSize: "2.5rem", marginBottom: "10px" },
  subtitle: { fontSize: "1.2rem", color: "#555" },
  hero: { 
    display: "flex", 
    justifyContent: "center", 
    marginBottom: "30px" 
  },
  heroImg: { 
    width: "60%", 
    maxWidth: "500px", 
    borderRadius: "20px", 
    boxShadow: "0 8px 25px rgba(0,0,0,0.25)", 
    transition: "transform 0.3s ease" 
  },
  content: { 
    maxWidth: "800px", 
    margin: "0 auto", 
    fontSize: "1.1rem", 
    lineHeight: "1.6rem", 
    background: "#fff", 
    padding: "20px", 
    borderRadius: "15px", 
    boxShadow: "0 5px 20px rgba(0,0,0,0.1)" 
  },
  subHeading: { 
    marginTop: "20px", 
    color: "#6a0dad", 
    fontSize: "1.5rem" 
  },
  list: { 
    marginTop: "10px", 
    paddingLeft: "20px", 
    color: "#333", 
    lineHeight: "1.8rem" 
  }
};
