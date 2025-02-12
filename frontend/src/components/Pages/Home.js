import React from "react";
import "./Home.css"; // Ensure Home.css is linked
import { FaGraduationCap, FaBook, FaLightbulb, FaTrophy } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">
        Empower Your Future with Our Advanced  
        <span className="word-slider">
          <span className="word">📚 Learning</span>
          <span className="word">🎓 Education</span>
          <span className="word">💡 Innovation</span>
          <span className="word">🧠 Knowledge</span>
          <span className="word">🏆 Success</span>
        </span>
      </h1>
      <div className="card-section">
        
        <div className="card">
          <FaGraduationCap className="card-icon" />
          <h2 className="card-title">Quality Education</h2>
          <p className="card-description">
            Get access to world-class educational resources.
          </p>
        </div>

        <div className="card">
          <FaBook className="card-icon" />
          <h2 className="card-title">Diverse Courses</h2>
          <p className="card-description">
            Explore courses in multiple domains and enhance your skills.
          </p>
        </div>

        <div className="card">
          <FaLightbulb className="card-icon" />
          <h2 className="card-title">Innovative Learning</h2>
          <p className="card-description">
            Learn with AI-powered tools and interactive content.
          </p>
        </div>

        <div className="card">
          <FaTrophy className="card-icon" />
          <h2 className="card-title">Achieve Success</h2>
          <p className="card-description">
            Build your career with our expert-guided programs.
          </p>
        </div>

      </div>

      </div>
  );
};

export default Home;
