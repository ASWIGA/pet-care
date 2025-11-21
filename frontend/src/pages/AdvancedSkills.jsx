import { useNavigate } from "react-router-dom";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";

export default function AdvancedSkills() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎓 Advanced Skills</h1>
      <p style={styles.text}>
        Advanced skills training teaches your pet complex behaviors, tricks, and problem-solving skills.
        Ideal for pets who mastered basic commands and are ready for mental stimulation.
      </p>

      <h3 style={styles.subTitle}>Benefits:</h3>
      <ul style={styles.list}>
        <li>✅ Mental stimulation and problem-solving</li>
        <li>✅ Builds confidence and learning ability</li>
        <li>✅ Encourages creativity and focus</li>
      </ul>

      <h3 style={styles.subTitle}>Tips:</h3>
      <ul style={styles.list}>
        <li>💡 Practice one trick at a time</li>
        <li>💡 Reward immediately after correct performance</li>
        <li>💡 Keep sessions consistent</li>
      </ul>

      <div style={styles.imageContainer}>
        <img src={img4} alt="Advanced 1" style={styles.img} />
        <img src={img5} alt="Advanced 2" style={styles.img} />
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
    background: "#e8f7ff",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  title: { color: "#007acc", fontSize: "2.5rem", marginBottom: "15px" },
  text: { color: "#444", fontSize: "1.1rem", lineHeight: "1.7", marginBottom: "25px" },
  subTitle: { color: "#007acc", marginBottom: "10px" },
  list: { textAlign: "left", margin: "0 auto 25px auto", maxWidth: "650px", lineHeight: "1.6" },
  imageContainer: { display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", marginBottom: "25px" },
  img: { width: "45%", maxHeight: "300px", objectFit: "cover", borderRadius: "12px", border: "2px solid #007acc" },
  button: {
    padding: "12px 22px",
    backgroundColor: "#007acc",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1rem",
    transition: "0.3s",
  },
};
