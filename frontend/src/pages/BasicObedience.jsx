import { useNavigate } from "react-router-dom";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

export default function BasicObedience() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🐾 Basic Obedience</h1>
      <p style={styles.text}>
        Basic obedience training teaches your pet commands like sit, stay, come, and heel.
        It improves communication, discipline, and your pet’s overall behavior.
      </p>

      <h3 style={styles.subTitle}>Benefits:</h3>
      <ul style={styles.list}>
        <li>✅ Better communication between pet and owner</li>
        <li>✅ Reduces unwanted behaviors like jumping and barking</li>
        <li>✅ Makes daily control easier</li>
      </ul>

      <h3 style={styles.subTitle}>Tips:</h3>
      <ul style={styles.list}>
        <li>💡 Use positive reinforcement with treats and praise</li>
        <li>💡 Keep training sessions short (5–10 minutes)</li>
        <li>💡 Be consistent and patient</li>
      </ul>

      <div style={styles.imageContainer}>
        <img src={img3} alt="Obedience 1" style={styles.img} />
        <img src={img4} alt="Obedience 2" style={styles.img} />
      </div>

      <button style={styles.button} onClick={() => navigate("/training")}>
        ⬅️ Back to Training
      </button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "30px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: "#fff8f0",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  title: {
    color: "#ff6f61",
    fontSize: "2.5rem",
    marginBottom: "15px",
  },
  text: {
    color: "#555",
    fontSize: "1.1rem",
    lineHeight: "1.7",
    marginBottom: "25px",
  },
  subTitle: {
    color: "#ff6f61",
    marginBottom: "10px",
  },
  list: {
    textAlign: "left",
    margin: "0 auto 25px auto",
    maxWidth: "650px",
    lineHeight: "1.6",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginBottom: "25px",
  },
  img: {
    width: "45%",
    maxHeight: "300px",
    objectFit: "cover",
    borderRadius: "12px",
    border: "2px solid #ff6f61",
  },
  button: {
    padding: "12px 22px",
    backgroundColor: "#ff6f61",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1rem",
    transition: "0.3s",
  },
};
