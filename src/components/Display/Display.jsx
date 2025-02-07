import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IoArrowBackOutline } from "react-icons/io5";
import { FaFileCode } from "react-icons/fa";
import { VscReferences } from "react-icons/vsc";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../Display/Display.css';

import htmlLectures from '../Html/htmlLectures';
import cssLectures from '../CSS/cssLectures';
import bootstrapLectures from '../Bootstrap/bootstrapLectures';
import jsLectures from '../JS/jsLectures';
import reactLectures from '../REACT/reactLectures';
import mongoLectures from '../MONGODB/mongoLectures';

function Display() {
  const { technology, lectureId } = useParams();
  const navigate = useNavigate();

  const lectureSets = {
    'html': htmlLectures,
    'css': cssLectures,
    'bootstrap': bootstrapLectures,
    'js': jsLectures,
    'react': reactLectures,
    'mongo': mongoLectures
  };

  const selectedLecture = lectureSets[technology]?.[parseInt(lectureId)];

  if (!selectedLecture) {
    navigate(`/main/${technology}`);
    return null;
  }

  const handleBack = () => {
    navigate(`/main/${technology}`);
  };

  const renderAssignments = () => {
    if (!selectedLecture.assignment) {
      return <p className="text-light">No assignments available</p>;
    }

    const processAssignment = (assignment) => {
      if (typeof assignment === 'string' && assignment.startsWith('http')) {
        return (
          <a 
            href={assignment} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-light text-decoration-none hover:text-success"
          >
            <span className="me-2 text-success">•</span>
            View Assignment
          </a>
        );
      }
      return (
        <div className="text-light">
          <span className="me-2 text-success">•</span>
          {assignment}
        </div>
      );
    };

    return (
      <ul className="list-unstyled">
        {Array.isArray(selectedLecture.assignment) ? (
          selectedLecture.assignment.map((assignment, index) => (
            <li key={index} className="mb-2">
              {processAssignment(assignment)}
            </li>
          ))
        ) : (
          <li className="mb-2">
            {processAssignment(selectedLecture.assignment)}
          </li>
        )}
      </ul>
    );
  };

  return (
    <div className="container display text-white py-1" style={{ minHeight: '100vh' }}>
      <div className="bb d-flex mb-2 gap-1 mb-2"  onClick={handleBack}>
      <div className="back-button ">
        <IoArrowBackOutline
          size={23} 

          role="button" 
          className="transition-all hover:opacity-75 back-btn" 
        />
      </div>
      <span className="bbtext">Back</span>
      </div>
      

      <div className="d-flex flex-column align-items-center mb-4">
        <div className="mb-4 video" style={{ 
          width: '1000px', 
          maxWidth: '100%',
          boxShadow: '0 8px 32px rgba(180, 177, 177, 0.26)'
        }}>
          <div className="ratio ratio-16x9 shadow-lg video">
            <iframe 
              src={selectedLecture.link.replace("/view", "/preview")} 
              title="Lecture Video"
              allowFullScreen
              className="border-0 rounded-3"
            />
          </div>
        </div>

        <div className="d-flex flex-column flex-md-row gap-4 mb-3" style={{ width: '1000px', maxWidth: '100%' }}>
          <div className="card flex-grow-1  bg-opacity-10 rounded-3 p-4">
            <h5 className="d-flex align-items-center gap-2 mb-3 tc-text">
              <FaFileCode /> Topics Covered
            </h5>
            <ul className="list-unstyled">
              {selectedLecture.topics.map((topic, index) => (
                <li key={index} className="mb-2 tc d-flex align-items-center text-light">
                  <span className="me-2  text-primary">•</span>
                  <div className="tc">{topic}</div>
                  
                </li>
              ))}
            </ul>
          </div>

          <div className="card flex-grow-1  bg-opacity-10 rounded-3 p-4">
            <h5 className="d-flex tc align-items-center gap-2 mb-3 ass-text mb-3">
              <VscReferences /> Assignments
            </h5>
            <div className="ass">{renderAssignments()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Display;