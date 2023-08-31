import React from "react";
import "./Result.css"; // Import your CSS file

const Result = ({ preAssessment }) => {
  return (
    <div className="result-container">
      <h2 className="result-title">Application Result</h2>
      <p className="pre-assessment-text">Pre-Assessment: {preAssessment}</p>
    </div>
  );
};

export default Result;
