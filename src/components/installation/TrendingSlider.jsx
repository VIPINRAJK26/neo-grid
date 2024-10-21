import { useState } from "react";
import "./TrendingSlide.css"; 

const TrendingSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
 
  const cards = [
    {
      title: "Heading 1",
      image:
        "https://img.freepik.com/free-vector/memory-storage-concept-illustration_114360-3888.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    },
    {
      title: "Heading 2",
      image:
        "https://img.freepik.com/free-vector/data-processing-concept-illustration_114360-4376.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    },
    {
      title: "Heading 3",
      image:
        "https://img.freepik.com/free-vector/gradient-website-hosting-illustration_23-2149247164.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    },
    {
      title: "Heading 4",
      image:
        "https://img.freepik.com/free-vector/backup-server-abstract-concept-illustration_335657-3709.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    },
    {
      title: "Heading 5",
      image:
        "https://img.freepik.com/free-vector/electricity-lighting-illustration-flat-style-with-character-electrician-with-wires-power-cabinet-vector-illustration_1284-53682.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    },
    {
      title: "Heading 6",
      image:
        "https://img.freepik.com/free-vector/error-429-concept-illustration_114360-6603.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    },
  ];

  const slideLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 4 : prevIndex - 1
    );
  };

  const slideRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 4 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider-container container py-3">
      <h2 className="slider-heading mb-3">Trending Products</h2>{" "}
      <button className="slider-button left" onClick={slideLeft}>
        &lt; 
      </button>
      <div className="card-slider">
        {cards.slice(currentIndex, currentIndex + 4).map((card, index) => (
          <div className="card border-0" key={index}>
            <img src={card.image} alt={card.title} />
            <h3 className="fw-bold">{card.title}</h3>
          </div>
        ))}
      </div>
      <button className="slider-button right" onClick={slideRight}>
        &gt; 
      </button>
    </div>
  );
};

export default TrendingSlider;
