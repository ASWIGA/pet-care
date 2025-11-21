import React from "react";
import { useNavigate } from "react-router-dom";
import longImg from "../assets/img5.jpg";

export default function LongWalk() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      

      <header style={styles.header}>
        <h1>🚶 Long Distance Walks</h1>
        <p>Perfect for active dogs who love long adventures!</p>
      </header>

      <div style={styles.hero}>
        <img src={longImg} alt="Long Walk" style={styles.heroImg} />
      </div>

      <section style={styles.content}>
        <h2 style={styles.subHeading}>✨ Inspiring Quotes</h2>
        <ul>
          <li>"Walking brings you closer to nature’s heart."</li>
          <li>"The best journeys are taken one step at a time."</li>
        </ul>

        <h2 style={styles.subHeading}>🐾 Benefits of Long Walks</h2>
        <ul>
          <li>Burns excess energy in hyperactive pets</li>
          <li>Strengthens muscles and stamina</li>
          <li>Helps maintain a healthy weight</li>
          <li>Great mental stimulation through exploration</li>
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




