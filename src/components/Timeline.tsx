import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Education & Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2025 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI, IoT & Defense Research Projects</h3>
            <h4 className="vertical-timeline-element-subtitle">Research & Development</h4>
            <p>
              Contributed to advanced AI-driven defense and robotics projects in collaboration with the Indian Army, focused on intelligent surveillance systems, autonomous response systems, smart monitoring infrastructure, and intelligent drone recovery technologies.
            </p>
            <p>Worked on:</p>
            <ul>
              <li>AI-Enabled Smart Fire & Smoke Detection and Response System</li>
              <li>Smart Drone Crash Recovery System (AI-Based Black Box)</li>
            </ul>
            <p>
              <strong>Core Areas:</strong> AI & Machine Learning, IoT Systems, Robotics, Computer Vision, Intelligent Surveillance, Autonomous Monitoring, Sensor Integration, Real-Time Processing.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2025 - Aug 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Research Engineer Intern — Data Science & Machine Learning</h3>
            <h4 className="vertical-timeline-element-subtitle">Zeetron Networks Pvt. Ltd.</h4>
            <p>
              Developed a Machine Learning-based Car Price Prediction Model using data preprocessing, feature engineering, model training, and prediction analysis techniques.
            </p>
            <p>
              Worked on predictive analytics, vehicle dataset analysis, and ML workflow optimization while gaining practical experience in research-based AI development.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Engineering — CSE (AI & ML)</h3>
            <h4 className="vertical-timeline-element-subtitle">Government Engineering College Barmer</h4>
            <p>
              Currently pursuing B.E. in Computer Science Engineering with specialization in Artificial Intelligence & Machine Learning under MBM University Jodhpur.
            </p>
            <p>
              Focused on AI/ML, Full Stack Development, Blockchain, Robotics, Cybersecurity, and Intelligent Automation Systems.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Higher Secondary Education (12th)</h3>
            <h4 className="vertical-timeline-element-subtitle">Kendriya Vidyalaya No.1 AFS Jodhpur</h4>
            <p>
              Completed Higher Secondary Education with 65% and developed strong interest in technology, programming, and engineering fields.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Secondary Education (10th)</h3>
            <h4 className="vertical-timeline-element-subtitle">Kendriya Vidyalaya No.1 AFS Jodhpur</h4>
            <p>
              Completed Secondary Education with 85.2% and actively participated in technical, academic, sports, and leadership activities.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;