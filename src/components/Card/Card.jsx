import React from "react";
import { FiExternalLink } from "react-icons/fi";
import "./Card.css";

const Card = ({ lecture, onSelect }) => {
  return (
    <div className="card1">
      <h2>
        {lecture.title}
        <FiExternalLink 
          className="external-link-icon" 
          onClick={() => onSelect(lecture)} 
          style={{ cursor: "pointer" }}
        />
      </h2>
      <p className="subtitle">Topics Covered:</p>
      <ul>
        {lecture.topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
      <button className="watch-now-btn" onClick={() => onSelect(lecture)}>
        Watch Now
      </button>
    </div>
  );
};

export default Card;