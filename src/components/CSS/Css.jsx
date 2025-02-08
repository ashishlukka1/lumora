import React from "react";
import { useNavigate } from 'react-router-dom';
import Card from "../Card/Card";
import cssLectures from './cssLectures';

const Css = () => {
  const navigate = useNavigate();

  const handleLectureSelect = (index) => {
    // Navigate to the lecture display route
    navigate(`/lecture/css/${index}`);
  };

  return (
    <div className="container-fluid py-4 ">
      <div className="row">
        <div className="col-12">
          <h5 className="text-center mb-4">*Refer from Lecture-3 for CSS</h5>
        </div>
      </div>
      <div className="lecture-container ">
        <div className="lecture-list d-flex flex-wrap gap-3 justify-content-center">
          {cssLectures.map((lecture, index) => (
            <Card 
              key={index} 
              lecture={lecture} 
              onSelect={() => handleLectureSelect(index)} 
              className="flex-"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Css;