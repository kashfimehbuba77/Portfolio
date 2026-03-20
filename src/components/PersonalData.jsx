import React from "react";
import "./PersonalData.css";

const PersonalData = () => {
  return (
    <section className="personal-data">
      <div className="container">

        <h2>Personal Data</h2>

        {/* Basic Info */}
        <div className="info">
          <p><strong>Name:</strong> Kashfi Mehbuba</p>
          <p><strong>Location:</strong> Toronto, ON</p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:kashfimehbuba71@gmail.com">
              kashfimehbuba71@gmail.com
            </a>
          </p>
          <p><strong>Phone:</strong> 647-621-1554</p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a href="https://www.linkedin.com/in/kashfi-mehbuba-5a8745301/" target="_blank" rel="noreferrer">
              View Profile
            </a>
          </p>
        </div>

        {/* Summary */}
        <div className="summary">
          <h3>Professional Summary</h3>
          <p>
            Software Development young professional with experience in full-stack,
            mobile, and backend development. Skilled in building scalable
            applications and RESTful APIs with strong problem-solving abilities
            and experience working in team-based software development projects.
          </p>
        </div>

        {/* Resume Button */}
        <div className="resume-btn">
          <a
            href="/resume/Resume_Kashfi_Mehbuba.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Download Resume
          </a>
        </div>

      </div>
    </section>
  );
};

export default PersonalData;