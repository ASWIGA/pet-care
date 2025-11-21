import { useNavigate } from "react-router-dom";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";

export default function PuppyTraining() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🐶 Puppy Training</h1>
      <p style={styles.text}>
        Puppy training focuses on socialization, basic commands, housebreaking, and bite inhibition.
        Early training is key to raising a confident and well-behaved adult dog.
      </p>

      <h3 style={styles.subTitle}>Benefits:</h3>
      <ul style={styles.list}>
        <li>✅ Socializes puppies with humans and other pets</li>
        <li>✅ Encourages healthy habits early</li>
        <li>✅ Prevents behavioral issues in adulthood</li>
      </ul>

      <h3 style={styles.subTitle}>Tips:</h3>
      <ul style={styles.list}>
        <li>💡 Begin training as early as 8 weeks old</li>
        <li>💡 Keep sessions fun and positive</li>
        <li>💡 Reward good behavior consistently</li>
      </ul>

      <div style={styles.imageContainer}>
        <img src={img4} alt="Puppy 1" style={styles.img} />
        <img src={img5} alt="Puppy 2" style={styles.img} />
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
    background: "#e6fff0",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  title: { color: "#33cc66", fontSize: "2.5rem", marginBottom: "15px" },
  text: { color: "#444", fontSize: "1.1rem", lineHeight: "1.7", marginBottom: "25px" },
  subTitle: { color: "#33cc66", marginBottom: "10px" },
  list: { textAlign: "left", margin: "0 auto 25px auto", maxWidth: "650px", lineHeight: "1.6" },
  imageContainer: { display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", marginBottom: "25px" },
  img: { width: "45%", maxHeight: "300px", objectFit: "cover", borderRadius: "12px", border: "2px solid #33cc66" },
  button: {
    padding: "12px 22px",
    backgroundColor: "#33cc66",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1rem",
    transition: "0.3s",
  },
};
