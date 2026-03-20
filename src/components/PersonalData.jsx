import React from "react";
import "./PersonalData.css";

const PersonalData = () => {
  return (
    <section className="hero">

      <div className="hero-container">

        {/* LEFT SIDE */}
        <div className="hero-text">

          <h1>
            Hi, I'm <span>Kashfi Mehbuba</span>
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

            {/* View Resume */}
            <a
              href="/resume/Resume_Kashfi_Mehbuba.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn secondary"
            >
              View Resume
            </a>

            {/* Download Resume */}
            <a
              href="/resume/Resume_Kashfi_Mehbuba.pdf"
              download
              className="btn secondary"
            >
              Download Resume
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/kashfi-mehbuba-5a8745301/"
              target="_blank"
              rel="noreferrer"
              className="btn secondary"
            >
              LinkedIn
            </a>

            {/* Email */}
            <a
              href="mailto:kashfimehbuba71@gmail.com"
              className="btn secondary"
            >
              Email Me
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="hero-image">
          <img src="/images/profile.jpeg" alt="Kashfi Mehbuba" />
        </div>

      </div>

    </section>
  );
};

export default PersonalData;