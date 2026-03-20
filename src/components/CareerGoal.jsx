import React from "react";
import "./CareerGoal.css";

const CareerGoal = () => {
  return (
    <section className="career-section">

      {/* Divider */}
      <div className="divider"></div>

      <div className="career-container">

        <h2>Philosophy & Career Goal</h2>

        <p className="quote">
          “We are the facilitators of our own creative evolution.” – Bill Hicks
        </p>

        <p>
          As a software developer, I believe that growth is a continuous and
          self-driven process shaped by curiosity, creativity, and persistence.
          My journey in computer programming has taught me that challenges are
          not obstacles but opportunities to learn, adapt, and refine my skills.
          Through academic projects and collaborative experiences, I have
          developed a strong foundation in problem-solving, teamwork, and
          building scalable solutions.
        </p>

        <p>
          Looking forward, I aim to grow into a well-rounded full-stack developer
          who not only builds functional systems but also creates meaningful user
          experiences. I see my role as someone who bridges ideas and technology,
          transforming concepts into impactful applications. By continuously
          learning and embracing new technologies, I strive to contribute to
          innovative projects while evolving both professionally and personally.
        </p>

      </div>

    </section>
  );
};

export default CareerGoal;