import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";

export default function Index() {
  const nav = useNavigate();
  const [hovered, setHovered] = useState(null); // track which card is hovered

  const quotes = [
    { text: "The greatness of a nation can be judged by the way its animals are treated.", img: img1 },
    { text: "Pets leave paw prints on our hearts.", img: img2 },
    { text: "Until one has loved an animal, a part of one's soul remains unawakened.", img: img3 },
    { text: "Happiness is a warm puppy.", img: img4 },
    { text: "Animals are such agreeable friends—they ask no questions; they pass no criticisms.", img: img5 },
    { text: "Every pet deserves a loving home.", img: img6 }
  ];

  return (
    <div style={styles.container}>
      

      {/* Hero Section */}
      <div style={styles.hero}>
        {quotes.map((q, i) => (
          <div
            key={i}
            style={{
              ...styles.cardWrapper,
              transform: hovered === i ? "scale(1.05) rotate(-1deg)" : "scale(1) rotate(0deg)",
              boxShadow: hovered === i ? "0 20px 35px rgba(0,0,0,0.3)" : "0 15px 25px rgba(0,0,0,0.2)"
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div style={styles.card}>
              <img src={q.img} alt="pet" style={styles.img} />
              <p style={styles.quote}>{q.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { 
    fontFamily: "Arial, sans-serif", 
    minHeight: "100vh", 
    background: "linear-gradient(to bottom, #fceae8, #e0f7fa)" 
  },
  navbar: { 
    display: "flex", 
    justifyContent: "space-between", 
    padding: "15px 30px", 
    backgroundColor: "#6a0dad", 
    color: "#fff", 
    alignItems: "center", 
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)" 
  },
  logo: { fontSize: "1.8rem", fontWeight: "bold" },
  navBtn: { 
    marginLeft: "10px", 
    padding: "8px 18px", 
    borderRadius: "25px", 
    border: "none", 
    cursor: "pointer", 
    background: "linear-gradient(45deg, #ff69b4, #ff1493)", 
    color: "#fff", 
    fontWeight: "bold", 
    transition: "0.3s"
  },
  hero: { 
    display: "flex", 
    justifyContent: "center", 
    flexWrap: "wrap", 
    gap: "25px", 
    padding: "50px 20px" 
  },
  cardWrapper: {
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
  },
  card: { 
    width: "300px", 
    background: "#ffffff", 
    borderRadius: "20px", 
    overflow: "hidden", 
    textAlign: "center", 
  },
  img: { 
    width: "100%", 
    height: "220px", 
    objectFit: "cover", 
    borderRadius: "20px 20px 0 0", 
    transition: "transform 0.3s" 
  },
  quote: { 
    padding: "20px", 
    fontStyle: "italic", 
    fontWeight: "500", 
    color: "#4b0082", 
    fontSize: "1rem", 
    lineHeight: "1.4rem" 
  }
};
