import "./styles/Education.css";

const Education = () => {
  return (
    <div className="education-section section-container">
      <div className="education-container">
        <h2>
          My <span>education</span>
        </h2>
        <div className="education-info">
          <div className="education-timeline">
            <div className="education-dot"></div>
            <div className="education-dot"></div>
          </div>
          <div className="education-info-box">
            <div className="education-info-in">
              <div className="education-role">
                <h4>M.Sc. Computer Science</h4>
                <h5>SRH Hochschule, Berlin</h5>
              </div>
              <h3>2020 - 2022</h3>
            </div>
            <p>
              Focus on Artificial Intelligence and Big Data. Advanced studies in machine learning, data science, and software engineering.
            </p>
          </div>
          <div className="education-info-box">
            <div className="education-info-in">
              <div className="education-role">
                <h4>B.Tech. Computer Science & Engineering</h4>
                <h5>Punjab Technical University, Jalandhar</h5>
              </div>
              <h3>2015 - 2019</h3>
            </div>
            <p>
              Foundation in computer science, algorithms, data structures, and software development principles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;