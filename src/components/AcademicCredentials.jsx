import React from "react";
import "./AcademicCredentials.css";

const AcademicCredentials = () => {
  return (
    <section className="academic-credentials">
      <div className="section-divider"></div>

      <div className="academic-container">
        <h2>Academic Credentials</h2>
        <p className="academic-intro">
          My academic journey reflects both technical growth and consistent
          academic achievement in Computer Programming and Analysis.
        </p>

        <div className="credentials-grid">
          <div className="credential-card">
            <h3>Education</h3>
            <p className="credential-title">
              Advanced Diploma — Computer Programming &amp; Analysis
            </p>
            <p className="credential-subtitle">
              George Brown Polytechnic
            </p>
            <p className="credential-detail">
              September 2023 – April 2026 (expected)
            </p>
          </div>

          <div className="credential-card">
            <h3>Academic Awards</h3>
            <p className="credential-title">
              Dean’s Honour’s List Recognition
            </p>
            <p className="credential-title">
              CADIT International Student Award
            </p>
          </div>

          {/* <div className="credential-card">
            <h3>Certificates / Degrees</h3>
            <p>
              Advanced Diploma in Computer Programming &amp; Analysis
              <span className="status-note"> (in progress)</span>
            </p>
          </div> */}

          {/* <div className="credential-card">
            <h3>Academic Record / Transcript</h3>
            <p>
              Available upon request.
            </p>
            <p className="transcript-note">
              This section is optional and can be updated later if you decide to
              attach an unofficial transcript PDF.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AcademicCredentials;