import React from "react";
import "./PersonalData.css";

const PersonalData = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>
            <span>Kashfi Mehbuba</span>
          </h1>

          <p className="subtitle">
            Software Developer | Computer Programming & Analysis Student
          </p>

          <p className="description">
            Software Development young professional with experience in full-stack,
            mobile, and backend development, building scalable applications and
            RESTful APIs.
          </p>

          <p className="description">
            Strong problem-solving skills and experience in team-based software
            development projects.
          </p>

          <div className="hero-buttons">

            <a
              href="/resume/Resume_Kashfi_Mehbuba.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn secondary"
            >
              View Resume
            </a>

            <a
              href="/resume/Resume_Kashfi_Mehbuba.pdf"
              download
              className="btn secondary"
            >
              Download Resume
            </a>

            <a
              href="https://www.linkedin.com/in/kashfi-mehbuba-5a8745301/"
              target="_blank"
              rel="noreferrer"
              className="btn secondary"
            >
              LinkedIn
            </a>

            <a
              href="mailto:kashfimehbuba71@gmail.com"
              className="btn secondary"
            >
              Email Me
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-image">
            <img src="/images/profile.jpeg" alt="Kashfi Mehbuba" />
          </div>

          <div className="contact-info">
            <p>
              <strong>Email:</strong> kashfimehbuba71@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> 647-621-1554
            </p>
            <p>
              <strong>Location:</strong> Toronto, ON
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalData;