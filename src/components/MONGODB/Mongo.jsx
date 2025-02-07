import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import mongoLectures from "./mongoLectures";

const Mongo = () => {
  const navigate = useNavigate();

  const handleLectureSelect = (index) => {
    // Navigate to the lecture display route
    navigate(`/lecture/mongo/${index}`);
  };

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          {/* <h2 className="text-center mb-4">JavaScript Lectures</h2> */}
        </div>
      </div>
      <div className="lecture-container">
        <div className="lecture-list d-flex flex-wrap gap-3 justify-content-center">
          {mongoLectures.map((lecture, index) => (
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

export default Mongo;
