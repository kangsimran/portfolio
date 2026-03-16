const Skills = () => {
  const skills = [
    "Python", "JavaScript", "TypeScript", "React", "Node.js",
    "TensorFlow", "PyTorch", "Scikit-learn", "Docker", "Kubernetes",
    "AWS", "HPC", "Machine Learning", "Deep Learning", "Computer Vision",
    "Natural Language Processing", "Data Science", "Big Data", "SQL", "MongoDB"
  ];

  return (
    <div 
      className="skills-section section-container" 
      style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '40px 0' }}
    >
      <div 
        className="skills-container" 
        style={{ textAlign: 'center', width: '100%', maxWidth: '1200px' }}
      >
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '30px' }}>
          My <span style={{ color: '#007bff', textTransform: 'uppercase' }}>skills</span>
        </h2>
        
        <div 
          className="skills-grid" 
          style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '15px'
          }}
        >
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-box"
              style={{ padding: '10px 20px', border: '1px solid currentColor', borderRadius: '24px' }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;