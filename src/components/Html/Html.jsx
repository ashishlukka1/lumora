import React from "react";
import { useNavigate } from 'react-router-dom';
import Card from "../Card/Card";
import htmlLectures from './htmlLectures';

const Html = () => {
  const navigate = useNavigate();

  const handleLectureSelect = (index) => {
    // Navigate to the lecture display route
    navigate(`/lecture/html/${index}`);
  };

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          {/* <h2 className="text-center mb-4">Bootstrap Lectures</h2> */}
        </div>
      </div>
      <div className="lecture-container">
        <div className="lecture-list d-flex flex-wrap gap-3 justify-content-center">
          {htmlLectures.map((lecture, index) => (
            <Card 
              key={index} 
              lecture={lecture} 
              onSelect={() => handleLectureSelect(index)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Html;