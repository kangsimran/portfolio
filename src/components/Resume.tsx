import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./styles/Resume.css";

const Resume = () => {
  return (
    <div className="resume-page">
      <Navbar />
      <div className="resume-header-nav">
        <Link to="/" className="back-btn">← Back to Portfolio</Link>
        <h1>Resume</h1>
        <a href="/media/simran/1691-A1EE/passport/Resume.pdf" target="_blank" className="pdf-btn">View PDF</a>
      </div>
      <div className="resume-content">
        <div className="resume-header">
          <h1>SIMRANJEET SINGH KANG</h1>
          <p>(M.Sc. Computer Science focus Artificial Intelligence and Big Data)</p>
          <div className="resume-contact">
            <p>RauenerStr. 47a, 15517 Fürstenwalde, Deutschland</p>
            <p>Tel. +4915904868957 | Email: simrankang138@gmail.com | LinkedIn: Simranjeet Singh Kang</p>
          </div>
        </div>

        <div className="resume-section-block">
          <h3>Experience</h3>
          <div className="experience-item">
            <h4>Software Engineer & Developer</h4>
            <h5>Interzero Plastic Sorting GmbH, Sept 2025-Present, Berlin, Germany</h5>
            <ul>
              <li>Developed custom AI applications and chatbots to streamline internal knowledge retrieval and improve organizational accessibility.</li>
              <li>Automated complex bureaucratic workflows and office tasks through Python-based scripting to increase operational efficiency.</li>
              <li>Implemented ML-driven material flow predictions to optimize logistics and enhance supply chain forecasting accuracy.</li>
              <li>Managed and optimized database systems, ensuring data integrity and high performance for enterprise-level applications.</li>
              <li>Led the integration of AI tools across departments, identifying key automation opportunities to reduce manual overhead.</li>
            </ul>
          </div>
          <div className="experience-item">
            <h4>Software Engineer for Machine Learning</h4>
            <h5>TÜV Rheinland, Jul 2024-Aug 2025, Bochum, Germany</h5>
            <ul>
              <li>Developed and deployed machine learning models using Python and libraries like TensorFlow, Keras, and Scikit-learn.</li>
              <li>Implemented containerization using Earthly and automated CI/CD pipelines for streamlined deployment and continuous integration.</li>
              <li>Preprocessed 14-channel raw data and implemented feature engineering for model optimization.</li>
              <li>Managed large-scale clusters for distributed machine learning and data processing and containerization.</li>
              <li>Managed code repositories and version control using Bitbucket in collaborative development environments.</li>
            </ul>
          </div>
          <div className="experience-item">
            <h4>Research Software Engineer For HPC</h4>
            <h5>Karlsruher Institute for Technology, Jul 2022-June 2024, Karlsruhe, Germany</h5>
            <ul>
              <li>Developing an existing CI/CD pipeline using future technologies On Horeka Supercomputer.</li>
              <li>Preparing project proposal for enhancing CI pipeline and Containerization tools.</li>
              <li>Supporting users in the support ticket system for workload issues.</li>
              <li>Working with workload tools for developing resource allocation on Horeka supercomputer.</li>
            </ul>
          </div>
          <div className="experience-item">
            <h4>Machine Learning Research Engineer</h4>
            <h5>Siemens GmbH, November 2021 – May 2022, Erlangen, Germany</h5>
            <ul>
              <li>Developing a CNN based model to train a large dataset model (Approx. 60GB).</li>
              <li>Running Inference on a data stream of 100Gb/s.</li>
              <li>Optimizing existing models using Nvidia’s SDK TensorRT.</li>
              <li>Optimizing the Data using Software development kits like Nvidia Dali.</li>
              <li>Working with Docker and GIT.</li>
              <li>Creating a Stable environment to run GPU based Training that include CUDA, CuDnn, TensorRT Using containers.</li>
            </ul>
          </div>
          <div className="experience-item">
            <h4>Python Programmer</h4>
            <h5>Tech. Mahindra, July 2019 – February 2020, New Delhi, India</h5>
            <ul>
              <li>Coordinating with development teams to determine application requirements.</li>
              <li>Writing scalable code using Python programming language.</li>
              <li>Testing and debugging applications.</li>
              <li>Developing back-end components.</li>
              <li>Integrating user-facing elements using server-side logic.</li>
            </ul>
          </div>
          <div className="experience-item">
            <h4>PHP Programmer (Intern)</h4>
            <h5>Netmax Technologies, January 2019 – June 2019, Chandigarh, India</h5>
            <ul>
              <li>Developed back-end components to connect applications with web services.</li>
              <li>Worked closely with Project Managers and other developers to define parameters and plan detailed specifications with clear project deliverables and timelines to meet strict deadlines.</li>
              <li>Developed framework using consistent components and templates across client projects for cohesive branding and user experiences.</li>
            </ul>
          </div>
          <div className="experience-item">
            <h4>Training in JAVA</h4>
            <h5>Fortune Technologies, June 2017 – November 2017, Chandigarh, India</h5>
            <ul>
              <li>Monitored and maintained operational readiness of all middleware applications.</li>
              <li>Applied change control best practices to Django development processes to provide software enhancements without disruptions for end users.</li>
              <li>Partnered with team members, including Software Engineers and Data Analysts to minimize project delays.</li>
            </ul>
          </div>
        </div>

        <div className="resume-section-block">
          <h3>Education</h3>
          <div className="education-item">
            <h4>M.Sc. Computer Science (Big Data & A.I)</h4>
            <h5>SRH Hochschule, Berlin, March 2020 – March 2022</h5>
            <p>Masters of Science in Computer Science Focus Big Data and Artificial Intelligence</p>
          </div>
          <div className="education-item">
            <h4>Bachelors of Technology in Computer Science & Engineering</h4>
            <h5>Punjab Technical University, Jalandhar, July 2015 – June 2019</h5>
            <p>Bachelors of Technology in Computer Science and Engineering</p>
          </div>
        </div>

        <div className="resume-section-block">
          <h3>Skills</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Languages</h4>
              <p>Python, C++, Java, Bash, R, HTML/CSS</p>
            </div>
            <div className="skill-category">
              <h4>Cloud & DevOps</h4>
              <p>Azure, Docker, CI/CD, GitLab, CircleCI</p>
            </div>
            <div className="skill-category">
              <h4>AI/ML</h4>
              <p>TensorFlow, Keras, PyTorch, Scikit-learn, ONNX</p>
            </div>
            <div className="skill-category">
              <h4>Data & Big Data</h4>
              <p>SQL, Redis, Apache Spark, ETL Pipelines</p>
            </div>
            <div className="skill-category">
              <h4>Computer Vision</h4>
              <p>OpenCV, Object Detection, Classification</p>
            </div>
            <div className="skill-category">
              <h4>Web & Data</h4>
              <p>Django, Data Visualization, Preprocessing</p>
            </div>
            <div className="skill-category">
              <h4>Infrastructure</h4>
              <p>Linux, WSL, Virtualization, Jupyter</p>
            </div>
            <div className="skill-category">
              <h4>Optimization</h4>
              <p>Hyperparameter Tuning, ML Pipelines</p>
            </div>
            <div className="skill-category">
              <h4>Soft Skills</h4>
              <p>Leadership, Problem Solving, Adaptability</p>
            </div>
            <div className="skill-category">
              <h4>OS</h4>
              <p>Ubuntu, CentOS, RHEL, Windows Subsystem for Linux</p>
            </div>
            <div className="skill-category">
              <h4>Collaboration</h4>
              <p>Slack, Teams, Conflict Resolution</p>
            </div>
            <div className="skill-category">
              <h4>Project Management</h4>
              <p>Agile, Scrum, Jira, Confluence</p>
            </div>
          </div>
        </div>

        <div className="resume-section-block">
          <h3>Publications</h3>
          <ul>
            <li>Author, DNN based feature extraction from large datasets. November 2020</li>
            <li>Author, Optimising Face Detection and Recognition Using Advanced Approaches. February 2021</li>
          </ul>
        </div>

        <div className="resume-section-block">
          <h3>Languages</h3>
          <ul>
            <li>English</li>
            <li>German</li>
            <li>Punjabi</li>
            <li>Hindi</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;