import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "Machine Learning",
    "Artificial Intelligence",
    "TensorFlow",
    "OpenCV",
    "Computer Vision",
    "Data Science",
    "Predictive Analytics",
    "Deep Learning",
    "Scikit-Learn",
];

const labelsSecond = [
    "React.js",
    "JavaScript",
    "Node.js",
    "FastAPI",
    "Flask",
    "Firebase",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "MongoDB",
    "PostgreSQL",
];

const labelsThird = [
    "IoT",
    "Embedded Systems",
    "Autonomous Robotics",
    "Blockchain",
    "Smart Contracts",
    "Solidity",
    "IPFS",
    "Raspberry Pi",
    "Cybersecurity",
    "Real-Time Processing",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>AI/ML & Computer Vision</h3>
                    <p>Passionate about building intelligent AI-powered systems using Machine Learning, Computer Vision, and Deep Learning technologies. Experienced in developing predictive systems, intelligent monitoring applications, and AI-driven automation solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Full Stack Development & Backend Systems</h3>
                    <p>Experienced in developing modern full-stack web applications with scalable backend systems, responsive UI architectures, authentication systems, and real-time application workflows using modern frameworks and technologies.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>IoT, Robotics & Blockchain Systems</h3>
                    <p>Focused on building intelligent autonomous systems combining IoT, Robotics, Blockchain, and real-time monitoring technologies for smart automation, security systems, and advanced research-oriented applications.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;