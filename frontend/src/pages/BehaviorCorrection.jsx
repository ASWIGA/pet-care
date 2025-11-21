import { useNavigate } from "react-router-dom";
import img3 from "../assets/img3.jpg";
import img5 from "../assets/img5.jpg";

export default function BehaviorCorrection() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>⚠️ Behavior Correction</h1>
      <p style={styles.text}>
        Behavior correction training addresses barking, jumping, chewing, and aggression.
        It helps your pet become well-mannered and reduces stress for both pet and owner.
      </p>

      <h3 style={styles.subTitle}>Benefits:</h3>
      <ul style={styles.list}>
        <li>✅ Reduces problem behaviors</li>
        <li>✅ Strengthens pet-owner relationship</li>
        <li>✅ Promotes calm and safe environment</li>
      </ul>

      <h3 style={styles.subTitle}>Tips:</h3>
      <ul style={styles.list}>
        <li>💡 Be consistent with corrections</li>
        <li>💡 Reward good behavior immediately</li>
        <li>💡 Avoid punishment-based methods</li>
      </ul>

      <div style={styles.imageContainer}>
        <img src={img3} alt="Behavior 1" style={styles.img} />
        <img src={img5} alt="Behavior 2" style={styles.img} />
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
    background: "#fff3e6",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  title: { color: "#ff9900", fontSize: "2.5rem", marginBottom: "15px" },
  text: { color: "#444", fontSize: "1.1rem", lineHeight: "1.7", marginBottom: "25px" },
  subTitle: { color: "#ff9900", marginBottom: "10px" },
  list: { textAlign: "left", margin: "0 auto 25px auto", maxWidth: "650px", lineHeight: "1.6" },
  imageContainer: { display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", marginBottom: "25px" },
  img: { width: "45%", maxHeight: "300px", objectFit: "cover", borderRadius: "12px", border: "2px solid #ff9900" },
  button: {
    padding: "12px 22px",
    backgroundColor: "#ff9900",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1rem",
    transition: "0.3s",
  },
};
