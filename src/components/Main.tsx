import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profileImage from '../assets/images/profile.jpg';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profileImage} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/wolfRbish7949" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/rohit-bishnoi-5b4164293" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Rohit Bishnoi</h1>
          <p>AI/ML Engineer | Full Stack Developer | Robotics & IoT Enthusiast</p>
          <p>Pre-Final Year Computer Science Engineering (AI & ML) student passionate about Artificial Intelligence, Full Stack Development, Blockchain, Robotics, Cybersecurity, and Intelligent Automation Systems.</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/wolfRbish7949" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/rohit-bishnoi-5b4164293" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
