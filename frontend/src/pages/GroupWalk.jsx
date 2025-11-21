import React from "react";
import { useNavigate } from "react-router-dom";
import groupImg from "../assets/img6.jpg";

export default function GroupWalk() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      

      <header style={styles.header}>
        <h1>🐕‍🦺 Group Walks</h1>
        <p>Fun and social walks for pets to meet new friends!</p>
      </header>

      <div style={styles.hero}>
        <img src={groupImg} alt="Group Walk" style={styles.heroImg} />
      </div>

      <section style={styles.content}>
        <h2 style={styles.subHeading}>✨ Inspiring Quotes</h2>
        <ul>
          <li>"Happiness is walking together with friends."</li>
          <li>"A pack that walks together, stays together."</li>
        </ul>

        <h2 style={styles.subHeading}>🐾 Benefits of Group Walks</h2>
        <ul>
          <li>Encourages socialization with other pets</li>
          <li>Improves confidence in shy dogs</li>
          <li>Provides safe group exercise</li>
          <li>Reduces boredom and loneliness</li>
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

