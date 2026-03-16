import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer & Developer</h4>
                <h5>Interzero Plastic Sorting GmbH</h5>
              </div>
              <h3>2025 - Present </h3>
            </div>
            <p>
              Developed custom AI applications and chatbots for internal knowledge retrieval. Automated workflows with Python scripting. Implemented ML-driven predictions for logistics. Managed databases and integrated AI tools across departments.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer for Machine Learning</h4>
                <h5>TÜV Rheinland</h5>
              </div>
              <h3>2024 - 2025</h3>
            </div>
            <p>
              Developed and deployed ML models using TensorFlow, Keras, and Scikit-learn. Implemented containerization with Earthly and CI/CD pipelines. Preprocessed data and managed clusters for distributed ML.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Research Software Engineer For HPC</h4>
                <h5>Karlsruher Institute for Technology</h5>
              </div>
              <h3>2022 - 2024</h3>
            </div>
            <p>
              Enhanced CI/CD pipelines on Horeka Supercomputer. Prepared proposals for containerization tools. Supported users with workload issues and resource allocation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Machine Learning Research Engineer</h4>
                <h5>Siemens GmbH</h5>
              </div>
              <h3>2021 - 2022</h3>
            </div>
            <p>
              Developed CNN models for large datasets. Optimized models with TensorRT and Nvidia Dali. Created stable GPU training environments using Docker and containers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
